<template>
    <OnRightSide class="w-[300px] fixed h-screen transition-all duration-[.2s] ease-in bg-white p-4 z-[150]"
                 :class="{ 'right-0' : isToggleRightSide , '-right-[300px]' :isToggleRightSide === false } "
                 @isClosed="val => this.isClosed = val"/>

    <div class="h-screen fixed w-full inset-y-0 right-0 transition-all duration-[.2s] ease-in"
         :class="{ 'opacity-0 -z-10' : isToggleRightSide === false , 'bg-slate-900/60' : isToggleRightSide }"
         @click="testMethod">
    </div>
        <header class="w-full p-10 shadow-sm">
            <ul class="flex justify-between">
                <li>
                    <h1>Wiz The Shadow</h1>
                </li>
                <li>
                    <h1>오늘도 비열하게 잘하자</h1>
                </li>
                <li class="flex items-center justify-center gap-5">
                    <!-- Notification -->
                    <button class="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-slate-500 dark:text-navy-100"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z"
                            />
                        </svg>
                    </button>

                    <!-- Right Side Toggle -->
                    <button type="button"
                            @click="isToggleRightSide = !isToggleRightSide"
                            class="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-slate-500 dark:text-navy-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                        </svg>
                    </button>
                </li>
            </ul>
        </header>

        <main class="p-10">
            <div class="container mx-auto">
                <ul>
                    <li>
                        <ul class="flex items-center justify-center gap-10">
                            <li>총 방문자 수 : {{ isTodayVisit + isYesterdayVisit }}</li>
                            <li>오늘 방문자 수 : {{ isTodayVisit }}</li>
                            <li>어제 방문자 수 : {{ isYesterdayVisit }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>
</template>

<script>
import OnRightSide from "@/admin/component/OnRightSide.vue";
export default {
    name: "AdminResponse",
    components: {OnRightSide},
    watch: {
      isClosed(){
          this.isToggleRightSide = !this.isToggleRightSide;
          this.isActiveDialog = !this.isActiveDialog;

          console.log("ㅅㅂㅈㅅㅂㅈㅅ", this.isActiveDialog);
      }
    },
    data(){
        return {
            isTotalVisit: 0,
            isTodayVisit: 0,
            isYesterdayVisit: 0,

            isToggleRightSide: false,
            isClosed: false,
            isActiveDialog: false,
        }
    },

    mounted() {
        console.log(this.isToggleRightSide);
    },

    methods: {
        testMethod(){
            if(this.isActiveDialog === false && this.isToggleRightSide === true) {
                this.isToggleRightSide = !this.isToggleRightSide;
                console.log("ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ");
            }
        },
    }
}
</script>

<style scoped>

</style>