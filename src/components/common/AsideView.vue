<template>
    <aside class="flex flex-col z-50">

        <div class="mb-8 text-center">
            <router-link to="/home">
                <div class="w-24 h-24 rounded-full bg-black mx-auto text-white mb-4">logo</div>
            </router-link>
            <h2>title</h2>
            <p>name</p>
        </div>
        <ul class="grid grid-cols-4 mb-12">
            <li class="col-span-2">
                <p>전체</p>
                <p>{{ todayVisitorsCount + yesterdayVisitorCount }}</p>
            </li>
            <li class="col-span-1 flex flex-col items-end">
                <p>오늘</p>
                <p>{{ todayVisitorsCount }}</p>
            </li>
            <li class="col-span-1 flex flex-col items-end">
                <p>어제</p>
                <p>{{ yesterdayVisitorCount }}</p>
            </li>
        </ul>

        <div class="mb-12">
            <h3 class="mb-6">CategoryList ({{ allContentCount }})</h3>

            <ul class="flex flex-col">
                <li v-for="(item, index) in categoryList"
                    :key="item.id" class="mb-2">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="cursor-pointer inline-block"
                              @click="isSubitemShow(item)">{{ item.title }} &nbsp;({{item.contentCount}})</span>
                        <svg v-if="item.isSubItems.length !== 0"
                             xmlns="http://www.w3.org/2000/svg"
                             class="transition-all duration-[.3s] ease-linear"
                             :class="{ 'rotate-180' : item.subItemShow === true}"
                             width="10"
                             height="10"
                             viewBox="0 0 10 10">
                            <path fill="black"
                                  d="M0 0 L10 0 L5 10 Z" />
                        </svg>
                    </div>
                    <Transition name="asideFade">
                        <ul v-show="item.subItemShow"
                            class="pl-2">
                            <li v-for="(subItem, index) in item.isSubItems"
                                :key="subItem.id" class="mb-2 last:mb-0">
                                <span class="text-sm">{{ subItem.title }} &nbsp;({{subItem.contentCount}})</span>
                            </li>
                        </ul>
                    </Transition>
                </li>
            </ul>
        </div>

        <div>
            오늘날씨
        </div>

    </aside>
</template>

<script>
export default {
    name: "AsideView",
    data() {
        return {
            todayVisitorsCount: 0,
            yesterdayVisitorCount: 0,

            categoryList:[
                {
                    id: 1,
                    title: "HTML",
                    titleCode: "HT20230623",
                    contentCount: 0,
                    subItemShow: false,
                    isSubItems: [],
                },
                {
                    id: 2,
                    title: "CSS",
                    titleCode: "CS20230623",
                    contentCount: 0,
                    subItemShow: false,
                    isSubItems: [
                        {
                            id: 1,
                            title: "CSS3",
                            titleCode: "CT20230623",
                            parentTitleCode: "CS20230623",
                            contentCount: 0,
                        },
                        {
                            id: 2,
                            title: "TAILWIND CSS",
                            titleCode: "TC20230623",
                            parentTitleCode: "CS20230623",
                            contentCount: 0,
                        },
                        {
                            id: 3,
                            title: "SCSS",
                            titleCode: "SC20230623",
                            parentTitleCode: "CS20230623",
                            contentCount: 0,
                        },
                        {
                            id: 4,
                            title: "SASS",
                            titleCode: "SA20230623",
                            parentTitleCode: "CS20230623",
                            contentCount: 0,
                        }
                    ]
                },
                {
                    id: 3,
                    title: "JAVASCRIPT",
                    titleCode: "JA20230623",
                    contentCount: 0,
                    subItemShow: false,
                    isSubItems: [
                        {
                            id: 1,
                            title: "ES5",
                            titleCode: "ES520230623",
                            parentTitleCode: "JA20230623",
                            contentCount: 0,
                        },
                        {
                            id: 2,
                            title: "ES6",
                            titleCode: "ES620230623",
                            parentTitleCode: "JA20230623",
                            contentCount: 0,
                        }
                    ]
                },
                {
                    id: 4,
                    title: "TYPESCRIPT",
                    titleCode: "JA20230623",
                    contentCount: 0,
                    subItemShow: false,
                    isSubItems: [],
                },
                {
                    id: 5,
                    title: "FRAMEWORK",
                    titleCode: "FR20230623",
                    contentCount: 0,
                    subItemShow: false,
                    isSubItems: [
                        {
                            id: 1,
                            title: "Vue.js",
                            titleCode: "VU20230623",
                            parentTitleCode: "FR20230623",
                            contentCount: 0,
                        },
                        {
                            id: 2,
                            title: "React.js",
                            titleCode: "RE20230623",
                            parentTitleCode: "FR20230623",
                            contentCount: 0,
                        },
                        {
                            id: 3,
                            title: "Svelte.js",
                            titleCode: "SV20230623",
                            parentTitleCode: "FR20230623",
                            contentCount: 0,
                        },
                        {
                            id: 4,
                            title: "Node.js",
                            titleCode: "NO20230630",
                            parentTitleCode: "FR20230623",
                            contentCount: 0,
                        }
                    ]
                },
                {
                    id: 6,
                    title: "CS",
                    titleCode: "CSE20230623",
                    contentCount: 0,
                    subItemShow: false,
                    isSubItems: [],
                },
                {
                    id: 7,
                    title: "THEORY",
                    titleCode: "TH20230623",
                    contentCount: 0,
                    subItemShow: false,
                    isSubItems: [],
                }
            ],
            allContentCount: 0,
        }
    },
    methods: {
        isCategoryListItemsNumber(){
            for(let i = 0; i < this.categoryList.length; i++){
                // console.log(this.categoryList[i].isSubItems);

                let categoryList = this.categoryList[i];
                let isSubItems = this.categoryList[i].isSubItems;

                for(let a = 0; a < isSubItems.length; a++){
                    if(isSubItems.length > 0 && isSubItems[a].parentTitleCode !== ""){
                        categoryList.contentCount += isSubItems[a].contentCount;
                        this.allContentCount += isSubItems[a].contentCount;
                    }
                }
            }

        },

        isSubitemShow(item){
            item.subItemShow = !item.subItemShow;
        },

        isEmitterData(){
            console.log(this.categoryList);

            setTimeout(() => {
                if(this.categoryList.length > 0) {
                    this.emitter.emit("category", this.categoryList);
                    console.log("this.categoryList in Emitt", this.categoryList);
                } else {
                    console.log("에러zz");
                }
            },200)
        }
    },

    created() {

    },

    mounted() {
        this.isEmitterData();
        this.isCategoryListItemsNumber();
    },
}
</script>

<style scoped>
.asideFade-enter-active {
    transition: all .3s ease-out !important;
}

.asideFade-leave-active {
    transition: all .3s ease-out !important;
}

.asideFade-enter-from,
.asideFade-leave-to {
    transform: translateX(20px) !important;
    opacity: 0 !important;
}
</style>