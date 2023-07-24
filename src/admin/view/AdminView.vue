<template>

    <AdminRequest v-if="isEnterAdmin !== true && this.$cookies.isKey('adminId') !== true"
                  @updateAdmin="val => this.isEnterAdmin = val" />

    <AdminResponse v-else />
</template>

<script>
import AdminRequest from "@/admin/component/AdminRequest.vue";
import AdminResponse from "@/admin/component/AdminResponse.vue";
export default {
    name: "AdminView",
    components: {AdminResponse, AdminRequest},
    data(){
        return {
            isEnterAdmin: '',
        }
    },

    mounted() {

    },

    methods: {

    }
}
</script>

<style scoped>

</style>