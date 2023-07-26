<script setup>
import { RouterView } from 'vue-router'
import AsideView from "@/components/common/AsideView.vue";
import TopView from "@/components/common/TopView.vue";

</script>

<template>

    <div id="appWrapper"
         v-if="this.$route.path !== '/admin'">
        <div class="w-full h-1 bg-[#CCC] fixed z-[99999]">
            <div class="w-0 h-1 bg-[#1ABC9C]"
                 ref="progressBar"></div>
        </div>
        <TopView :topViewProp="topViewProp" />

        <AsideView :asideProp="allProp"
            class="fixed top-0 w-[260px] py-8 px-4 h-screen bg-zinc-100"/>

        <main class="w-[89.85%] mx-auto mr-0 h-full">
            <RouterView :mainProp="allProp"/>
        </main>
    </div>
    <div v-else>
        <router-view/>
    </div>
</template>

<script>
import AOS from 'aos';
import allProp from "@/data/allProp";

export default {
    name: "AppView",
    data() {
        return {
            isMount: false,
            allProp: allProp,
            topViewProp: [
            {
                id: 1,
                gnbName: "HOME",
                gnbPath: '/home',
            },
            {
                id: 2,
                gnbName: "CATEGORY",
                gnbPath: '/category',
            },
            {
                id: 3,
                gnbName: "VISITOR",
                gnbPath: '/visitor',
            }
        ]
        }
    },

    mounted() {
        this.isMount = !this.isMount;
        AOS.init();
        window.addEventListener('scroll', () => {
            this.isShowProgressBar();
        })
    },

    methods: {
        isShowProgressBar(){
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            this.$refs.progressBar.style.width = scrolled + '%';
        }
    }
}

</script>

<style scoped>
.main-enter-active,
.main-leave-active {
    transition: opacity 2s ease !important;
}

.main-enter-from,
.main-leave-to {
    opacity: 0 !important;
}

#appWrapper {
    animation: fade 2s forwards ease-out;
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 100%;
    }
}

* ::selection {
    background-color: #1ABC9C !important;
    color: #fff;
}
</style>
