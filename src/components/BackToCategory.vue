<template>
    <div v-if="htmlPageCount === 1">
        <router-link to="/category">뒤로가기</router-link>
    </div>
</template>

<script>
export default {
    name: "BackToCategory",
    props: {
        htmlPageCount: {
            type: Number,
        },
        htmlList: {
            type: Array,
        },
        inCreaseTheCount: {
            type: Function,
        }
    },

    data(){
        return {
            htmlPageCount: this.$props.htmlPageCount,
            htmlList: this.$props.htmlList,
        }
    },

    mounted() {
        console.log('prop 안함',this.htmlList);
    }
}
</script>

<style scoped>

</style>