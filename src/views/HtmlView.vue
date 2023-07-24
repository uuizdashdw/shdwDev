<template>
    <div class="p-8 w-full h-full relative">
        <span v-if="htmlPageCount > 1"
              @click="isDecreaseTheCount"
              class="absolute cursor-pointer select-none">이전으로</span>
        <span @click="isIncreasedTheCount"
              class="absolute right-8 cursor-pointer select-none">다음으로</span>
        <h2 class="text-center text-3xl mb-20 select-none" >About HTML's HISTORY</h2>

        <ul class="flex flex-col gap-10 container mx-auto relative">
            <li v-for="(item, index) in htmlList" :key="item.id"
                class="absolute w-full">
                <div v-show="item.id === htmlPageCount" class="pb-8">
                    <HtmlHistory v-show="item.title === 'HISTORY'" />
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
import HtmlHistory from "@/components/HtmlHistory.vue";
export default {
    name: "HtmlView",
    components: {HtmlHistory, ToNextStepHtml},
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