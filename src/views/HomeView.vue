<template>

    <div class="h-[984px] mb-8 flex flex-col justify-center">
        <div class="mb-72">
            <ul class="flex justify-center items-center gap-6">
                <li v-for="item in categoryList" :key="item.id">
                    #{{ item.title }}
                </li>
            </ul>

            <p class="text-center text-lg">등을 공부하고 기록하고 있어요</p>
        </div>

        <div class="text-center text-4xl mb-10">
            <h1 class="mb-2"
                data-aos="fade-right"
                data-aos-delay="0">자, 어서오세요.</h1>
            <p  class="mb-2"
                data-aos="fade-right"
                data-aos-delay="1000">춤추는 개발자는 처음이시죠?</p>
            <p class="mb-2"
               data-aos="fade-right"
               data-aos-delay="2000">괜찮아요ㅎ 저도 처음이에요ㅎ</p>
        </div>

        <p data-aos="fade-right"
           data-aos-delay="3000"
           class="text-center text-lg mb-20">아래에 제 게시물들이 요약되어 있으니 천천히 둘러봐주세요!</p>
    </div>
    <div class="px-8">ㅋㅋㅋ</div>

</template>
<script>
import AOS from "aos";
export default {
    name: "HomeView",
    props: {
        mainProp: {
            type: Array,
            required: true,
        }
    },
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
        this.categoryList = this.$props.mainProp;

    },
    methods: {

    }
}
</script>
<style>



</style>
