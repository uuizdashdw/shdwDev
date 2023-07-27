<template>
    <div class="p-10 pb-0">
        <p class="text-center text-lg">
            현재 작성/수정 중인 카테고리는
            <span class="text-[#1ABC9C]">{{ this.$route.path.substr(7,10).toUpperCase() }}</span>
            입니다.
        </p>
        <div class="text-center">
            <p class="text-lg mb-2">카테고리 변경을 원하시면 아래에서 선택해주세요.</p>

            <select class="shadow-md py-1 px-2 rounded w-36 focus:outline-[#1ABC9C] bg-transparent"
                    @change="isChangedTheCategory($event.target.value)">
                <option v-for="(item, index) in categoryList"
                        :key="item.id">
                    {{ item.title }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: "GuideView",
    props: {
        mainProp: {
            type: Array,
            required: true,
        }
    },

    data(){
        return {
            categoryList: this.$props.mainProp,
        }
    },

    mounted() {
        this.categoryList = this.$props.mainProp;
    },

    methods: {
        isChangedTheCategory(title){
            if(title === 'HTML'){
                this.$router.push('/admin/html');
            } else if(title === 'CSS'){
                this.$router.push('/admin/css');
            } else if(title === 'JAVASCRIPT') {
                this.$router.push('/admin/javascript');
            } else if(title === 'TYPESCRIPT') {
                this.$router.push('/admin/typescript');
            } else if(title === 'FRAMEWORK') {
                this.$router.push('/admin/framework');
            } else if(title === 'CS') {
                this.$router.push('/admin/cs');
            } else if(title === 'THEORY') {
                this.$router.push('/admin/theory');
            }
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1) !important;
}

.fade-enter-from, .fade-leave-to {
    transform: translateX(20px) !important;
    opacity: 0 !important;
}
</style>