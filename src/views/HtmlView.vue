<template>
    <div class="p-8 w-full h-full relative">
        <span v-if="htmlPageCount > 1"
              @click="isDecreaseTheCount"
              class="absolute cursor-pointer select-none">이전으로</span>
        <span @click="isIncreasedTheCount"
              class="absolute right-8 cursor-pointer select-none">다음으로</span>
        <h2 class="text-center text-3xl mb-20 select-none" >About HTML</h2>

        <ul class="flex flex-col gap-10 container mx-auto relative">
            <li v-for="(item, index) in htmlList" :key="item.id"
                class="absolute w-full">
                <div v-show="item.id === htmlPageCount">
                    <h3 class="text-center text-2xl mb-10">{{ item.title }}</h3>

                    <div v-show="item.title === 'HISTORY'">
                        <h4 class="text-xl mb-8">SGML (Standard Generalized Markup Language - HTML의 근본</h4>
                        <div class="mb-8">
                            <p>먼저 처음에 HTML이 생겨나게 된 목적은 하나이다.</p>
                            <p>웹페이지의 컨텐츠들을 다양한 환경(브라우저)에서 열람을 해도 동일하게 볼 수 있도록 하나의 표현 언어를 생성할 필요성이 생겨난 것이다.</p>
                        </div>
                        <div>
                            <p>그 약속된 언어의 표현을 정의하려다 보니 이미 존재하는 SGML이라는 것이 눈에 띄었다.</p>
                            <p><span class="italic">SGML(Standard Generalized Markup Language) 이라는 것은 문서용 마크업 언어를 정의하기 위한 메타언어</span> 이다.</p>
                            <p>즉, 웹페이지가 아니라 전반적인 모든 문서들을 표현하기에는 알맞는 언어이다.</p>
                        </div>
                    </div>
                    <div v-show="item.title === 'HTML 시작'">시작</div>
                    <div v-show="item.title === 'HTML 텍스트 요소'">텍스트 요소</div>
                    <div v-show="item.title === 'HTML 기본요소'">기본요소</div>
                    <div v-show="item.title === 'HTML 공간분할'">공간분할</div>
                    <div v-show="item.title === 'HTML 입력양식'">입력양식</div>
                    <div v-show="item.title === 'HTML 확장'">확장</div>
                    <div v-show="item.title === 'HTML5'">HTML5</div>
                    <div v-show="item.title === 'HTML5 요소'">HTML5 요소</div>
                    <div v-show="item.title === 'HTML5 API'">HTML5 API</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ToNextStepHtml from "@/components/ToNextStepHtml.vue";
export default {
    name: "HtmlView",
    components: {ToNextStepHtml},
    props: {
        mainProp: {
            type: Array,
            required: true,
        }
    },
    data(){
        return {
            categoryList: this.$props.mainProp,
            htmlList: [],
            htmlPageCount: 1,
        }
    },
    mounted() {
        this.htmlList = this.categoryList[0].isSubItems;
    },
    methods: {
        isIncreasedTheCount(){
            this.htmlPageCount < 10 ? this.htmlPageCount += 1 : this.htmlPageCount += 0;
        },

        isDecreaseTheCount(){
            this.htmlPageCount <= 10 ? this.htmlPageCount -= 1 : this.htmlPageCount -= 0;
        }
    }
}
</script>

<style scoped>

</style>