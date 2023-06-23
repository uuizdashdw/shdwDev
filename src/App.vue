<script setup>
import { RouterView } from 'vue-router'
import AsideView from "@/components/common/AsideView.vue";

</script>

<template>
    <div class="flex">
        <AsideView class="w-[260px] py-8 px-4 h-screen bg-zinc-100" />


        <RouterView />
    </div>

</template>

<style scoped>

</style>
