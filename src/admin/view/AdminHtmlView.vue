<template>
    <main class="container mx-auto">
        <ul class="mb-6">
            <li class="mb-4">
                <span class="mr-2">태그: </span>
                <select class="shadow-md rounded px-2 py-1 focus:outline-[#1ABC9C] bg-transparent transition-all duration-[.25s]"
                        v-model="isTitleTag"
                        ref="isTitleTag"
                        @change="isChangedTag($event.target.value)">
                    <option v-for="(item, index) in categoryList[0].isSubItems"
                            :key="item.id">
                        {{ item.title }}
                    </option>
                </select>
            </li>
            <li class="mb-4">
                <label class="mr-2">제목: </label>
                <input type="text"
                       v-model="isTitle"
                       ref="isTitle"
                       autocomplete="off"
                       class="shadow-md rounded px-2 py-1 focus:outline-[#1ABC9C] w-1/2 bg-transparent" />
            </li>
            <li class="flex">
                <span class="mr-2">내용: </span>
                <textarea v-model="isContext"
                          ref="isContext"
                          autocomplete="off"
                          class="resize-none shadow-md rounded px-2 py-1 focus:outline-[#1ABC9C] w-11/12 h-[700px] bg-transparent" />
            </li>
        </ul>
        <div class="text-right w-11/12 mx-auto">
            <button class="shadow-md rounded inline-block px-12 py-2 mr-4 transition-all duration-[.25s]"
                    :class="{ 'text-slate-300' : isTitleTag === '' || isTitle === '' || isContext === '' ,
                              'text-[#1ABC9C] shadow-[#1ABC9C] scale-105' : isTitleTag !== '' && isTitle !== '' && isContext !== '' }"
                    :disabled="isTitleTag === '' || isTitle === '' || isContext === ''"
                    @click="saveTheData">저장</button>
        </div>
    </main>
</template>

<script>
import Data from '../../data/allProp';

export default {
    name: "AdminHtmlView",
    props: {
        mainProp: {
            type: Array,
            required: true,
        }
    },

    data(){
        return {
            categoryList: this.$props.mainProp,
            isSubItems: [],

            isTitleTag:'',
            isTitle: '',
            isContext: '',
        }
    },

    watch: {

    },

    mounted() {
        this.categoryList = this.$props.mainProp;
        console.log(this.categoryList);

        console.log(Data[0].isSubItems[0].content);
    },

    methods: {
        isChangedTag(val){
            console.log(val);
        },

        saveTheData(){
            if(this.categoryList[0].title === this.isTitleTag) {
                this.categoryList[0].isSubItems[0].content.title = this.isTitle;
            }

            console.log(this.categoryList[0].isSubItems[0].content.title);
            console.log(this.isTitle);
        }
    }

}
</script>

<style scoped>

</style>