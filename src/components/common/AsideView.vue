<template>
    <aside class="flex flex-col z-50">

        <div class="mb-8 text-center">
            <router-link to="/home">
                <div class="w-24 h-24 rounded-full bg-black mx-auto text-white mb-4">logo</div>
            </router-link>
            <h2 class="mb-2">Wisdom in the SHADOW</h2>
            <p>WIZ</p>
            <p class="text-sm">( BBOY, FE Developer )</p>
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

    </aside>
</template>

<script>
export default {
    name: "AsideView",
    data() {
        return {
            todayVisitorsCount: 0,
            yesterdayVisitorCount: 0,
            categoryList: [],
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
    },

    created() {

    },

    props: {
        asideProp: {
            type: Array,
        }
    },

    mounted() {
        this.isCategoryListItemsNumber();

        this.categoryList = this.$props.asideProp;
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