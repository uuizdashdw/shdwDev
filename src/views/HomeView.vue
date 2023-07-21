<template>
    <HomeIntro />

    <readyForService class="px-8"/>

</template>
<script>
import HomeIntro from "@/components/HomeIntro.vue";
import readyForService from "@/components/readyForService.vue";
export default {
    name: "HomeView",
    components: {
        HomeIntro,
        readyForService
    },
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
        this.categoryList = this.$props.mainProp;

    },
    methods: {

    }
}
</script>
<style>



</style>
