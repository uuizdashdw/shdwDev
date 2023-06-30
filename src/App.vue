<script setup>
import { RouterView } from 'vue-router'
import AsideView from "@/components/common/AsideView.vue";
import TopView from "@/components/common/TopView.vue";

</script>

<template>
    <TopView />
    <AsideView class="fixed w-[260px] py-8 px-4 h-screen bg-zinc-100" />



    <RouterView class="h-[2080px]"/>


</template>

<style scoped>

</style>
