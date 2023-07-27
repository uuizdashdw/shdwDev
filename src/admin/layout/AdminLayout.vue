<template>
    <header-view />

    <GuideView v-if="this.$route.path !== '/admin'" :mainProp="mainProp" />

    <router-view :mainProp="mainProp"
                 class="p-10"/>
</template>

<script>
import headerView from "@/admin/component/common/headerView.vue";
import GuideView from "@/admin/component/common/GuideView.vue";

export default {
    name: "AdminLayout",
    components: {
      headerView,
        GuideView,
    },

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
    }
}
</script>

<style scoped>

</style>