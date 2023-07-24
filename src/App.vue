<script setup>
import { RouterView } from 'vue-router'
import AsideView from "@/components/common/AsideView.vue";
import TopView from "@/components/common/TopView.vue";

</script>

<template>

    <div id="appWrapper">
        <div class="w-full h-1 bg-[#CCC] fixed z-[99999]">
            <div class="w-0 h-1 bg-[#1ABC9C]"
                 ref="progressBar"></div>
        </div>
        <TopView :topViewProp="topViewProp" />

        <AsideView :asideProp="allProp"
            class="fixed top-0 w-[260px] py-8 px-4 h-screen bg-zinc-100"/>

        <main class="w-[88.85%] mx-auto mr-0" :class="{ 'h-[64.75rem]' : this.$route.path === '/category' }">
            <RouterView :mainProp="allProp"/>
        </main>
    </div>
</template>

<script>
import AOS from 'aos';
export default {
    name: "AppView",
    data() {
        return {
            isMount: false,
            allProp: [
            {
                id: 1,
                title: "HTML",
                titleCode: "HT20230623",
                contentCount: 0,
                subItemShow: false,
                isSubItems: [
                    {
                        id: 1,
                        title: 'HISTORY',
                        titleCode: 'HI20230714',
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    },
                    {
                        id: 2,
                        title: 'HTML 시작',
                        titleCode: 'HS20230714',
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    },
                    {
                        id: 3,
                        title: 'HTML 텍스트 요소',
                        titleCode: 'HX20230714',
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    },
                    {
                        id: 4,
                        title: 'HTML 기본요소',
                        titleCode: 'HB20230714',
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    },
                    {
                        id: 5,
                        title: 'HTML 공간분할',
                        titleCode: "HD20230714",
                        parentTitleCode: "HT20230623",
                        contentCount: 0,
                    },
                    {
                        id: 6,
                        title: 'HTML 입력양식',
                        titleCode: 'HF20230714',
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    },
                    {
                        id: 7,
                        title: 'HTML 확장',
                        titleCode: 'HE20230714',
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    },
                    {
                        id: 8,
                        title: 'HTML5',
                        titleCode: 'HVF20230714',
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    },
                    {
                        id: 9,
                        title: 'HTML5 요소',
                        titleCode: "HFE20230714",
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    },
                    {
                        id: 10,
                        title: 'HTML5 API',
                        titleCode: 'HA20230714',
                        parentTitleCode: 'HT20230623',
                        contentCount: 0,
                    }
                ],
            },
            {
                id: 2,
                title: "CSS",
                titleCode: "CS20230623",
                contentCount: 0,
                subItemShow: false,
                isSubItems: [
                    {
                        id: 1,
                        title: "CSS3",
                        titleCode: "CT20230623",
                        parentTitleCode: "CS20230623",
                        contentCount: 0,
                    },
                    {
                        id: 2,
                        title: "TAILWIND CSS",
                        titleCode: "TC20230623",
                        parentTitleCode: "CS20230623",
                        contentCount: 0,
                    },
                    {
                        id: 3,
                        title: "SCSS",
                        titleCode: "SC20230623",
                        parentTitleCode: "CS20230623",
                        contentCount: 0,
                    },
                    {
                        id: 4,
                        title: "SASS",
                        titleCode: "SA20230623",
                        parentTitleCode: "CS20230623",
                        contentCount: 0,
                    }
                ]
            },
            {
                id: 3,
                title: "JAVASCRIPT",
                titleCode: "JA20230623",
                contentCount: 0,
                subItemShow: false,
                isSubItems: [
                    {
                        id: 1,
                        title: "ES5",
                        titleCode: "ES520230623",
                        parentTitleCode: "JA20230623",
                        contentCount: 0,
                    },
                    {
                        id: 2,
                        title: "ES6",
                        titleCode: "ES620230623",
                        parentTitleCode: "JA20230623",
                        contentCount: 0,
                    }
                ]
            },
            {
                id: 4,
                title: "TYPESCRIPT",
                titleCode: "JA20230623",
                contentCount: 0,
                subItemShow: false,
                isSubItems: [],
            },
            {
                id: 5,
                title: "FRAMEWORK",
                titleCode: "FR20230623",
                contentCount: 0,
                subItemShow: false,
                isSubItems: [
                    {
                        id: 1,
                        title: "Vue.js",
                        titleCode: "VU20230623",
                        parentTitleCode: "FR20230623",
                        contentCount: 0,
                    },
                    {
                        id: 2,
                        title: "React.js",
                        titleCode: "RE20230623",
                        parentTitleCode: "FR20230623",
                        contentCount: 0,
                    },
                    {
                        id: 3,
                        title: "Svelte.js",
                        titleCode: "SV20230623",
                        parentTitleCode: "FR20230623",
                        contentCount: 0,
                    },
                    {
                        id: 4,
                        title: "Node.js",
                        titleCode: "NO20230630",
                        parentTitleCode: "FR20230623",
                        contentCount: 0,
                    }
                ]
            },
            {
                id: 6,
                title: "CS",
                titleCode: "CSE20230623",
                contentCount: 0,
                subItemShow: false,
                isSubItems: [],
            },
            {
                id: 7,
                title: "THEORY",
                titleCode: "TH20230623",
                contentCount: 0,
                subItemShow: false,
                isSubItems: [],
            }
            ],
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
