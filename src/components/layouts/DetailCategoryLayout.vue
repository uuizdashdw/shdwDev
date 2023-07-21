<template>
    <router-view :mainProp="mainProp" class="p-8 pt-[10.5rem]"/>
</template>

<script>
export default {
    name: "DetailCategoryView",
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

    }
}
</script>

<style scoped>

</style>