<template>
        <main class="p-10">
            <div class="container mx-auto">
                <ul>
                    <li>
                        <ul class="flex items-center justify-center gap-10 mb-10">
                            <li>전체 방문자 수 : {{ isTodayVisit + isYesterdayVisit }}</li>
                            <li>오늘 방문자 수 : {{ isTodayVisit }}</li>
                            <li>어제 방문자 수 : {{ isYesterdayVisit }}</li>
                        </ul>
                    </li>
                </ul>

                <ul class="grid grid-cols-2 max-w-4xl mx-auto gap-10">
                    <li v-for="(item, index) in categoryList"
                        :key="item.id"
                        class="shadow-md rounded p-5 hover:scale-110 transition-all duration-[.25s] cursor-pointer"
                        @click="isMovingToCreateView(item.id, index, item)">
                        <h5 class="mb-4 text-xl">{{ item.title }} 글 작성/관리</h5>
                        <p class="text-sm text-slate-600/60 mb-4">{{ item.title }}에 대해 글을 작성하고 관리합니다.</p>
                        <ul class="flex flex-wrap gap-x-4 items-center">
                            <li v-for="item in item.isSubItems">
                                <p class="text-sm text-slate-600/40">#{{ item.title }}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>
</template>

<script>


export default {
    name: "AdminResponse",

    props: {
      mainProp: {
          type: Array,
      }
    },
    data(){
        return {
            isTotalVisit: 0,
            isTodayVisit: 0,
            isYesterdayVisit: 0,

            categoryList: this.$props.mainProp,
        }
    },

    mounted() {
        this.categoryList = this.$props.mainProp;
    },

    methods: {


        isMovingToCreateView(id, index, item){

            id === index + 1 ? this.$router.push(`/admin/${item.title.toLowerCase()}`) : this.$router.push('/admin');
        }
    }
}
</script>

<style scoped>

</style>