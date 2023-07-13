

<template>
    <main class="w-[89%] mx-auto mr-0">
        <div>
            <div class="text-center text-3xl mb-20">
                <h1 class="mb-2"
                    data-aos="fade-right"
                    data-aos-delay="200">자, 어서오세요.</h1>
                <p  class="mb-2"
                    data-aos="fade-right"
                    data-aos-delay="1200">춤추는 개발자는 처음이시죠?</p>
                <p class="mb-2"
                   data-aos="fade-right"
                   data-aos-delay="2200">괜찮아요ㅎ 저도 처음이에요ㅎ</p>
            </div>

            <ul class="flex justify-center items-center gap-10">
                <li v-for="item in categoryList" :key="item.id">
                    #{{ item.title }}
                </li>
            </ul>

        </div>
    </main>
</template>
<script>
import AOS from "aos";
export default {
    name: "HomeView",
    data(){
        return {
           testList: '',
            categoryList: [],
        }
    },
    created() {

    },
    mounted() {
        AOS.init();

        this.getCategoryList();
    },
    methods: {
        getCategoryList(){
            //this.categoryList 수신
            this.emitter.on('category',(a) => {
                this.testList = a;
                a !== "" && a !== [] ? this.testList = a : console.log("에러남",this.testList);
                console.log('이럼됨',this.testList);

                for(let i = 0; i < this.testList.length; i++){
                    this.categoryList.push(this.testList[i]);
                }
            });
        }
    }
}
</script>
<style>



</style>
