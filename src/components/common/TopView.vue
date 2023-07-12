<template>
    <header class="fixed left-1/2 -translate-x-1/2 w-full border-b bg-white">
        <h1 class="text-3xl text-center py-8">
            춤추는 프론트엔드<span class="text-lg">(비열함)</span>
        </h1>

        <ul class="flex justify-center gap-32">
            <li :class="{ 'border-b-4 border-[#1ABC9C]' : this.$route.path === '/home' }">
                <router-link id="home"
                             to="/home"
                             class="relative inline-block rounded z-10 overflow-hidden px-4 py-1"
                >HOME</router-link>
            </li>
            <li :class="{ 'border-b-4 border-[#1ABC9C]' : this.$route.path === '/category' }">
                <router-link id="category"
                             to="/category"
                             class="relative inline-block rounded z-10 overflow-hidden px-4 py-1"
                >CATEGORY</router-link>
            </li>
            <li :class="{ 'border-b-4 border-[#1ABC9C]' : this.$route.path === '/visitor' }">
                <router-link id="visitor"
                             to="/visitor"
                             class="relative inline-block rounded z-10 overflow-hidden px-4 py-1"
                >VISITOR</router-link>
            </li>
        </ul>

        <div class="text-black absolute top-10 right-10">
            <span v-html="nowYear+'.'+ nowMonth + '.' + nowDay + '('+dayOfWeek+')'"
                  class="text-black mr-2"></span>
            <span ref="nowLiveTime"></span>
        </div>
    </header>
</template>

<script>
export default {
    name: "TopView",
    data(){
        return{
            nowTotalTime: '',
            nowYear: '',
            nowMonth: '',
            nowDay: '',
            nowHour: '',
            nowMinute: '',
            nowSecond: '',
            nowDate: '',
            dayOfWeek: '',
        }
    },
    mounted() {
        this.isNowTime();
        setInterval(this.isNowTime, 1000);
    },

    methods: {
        isNowTime(){
            this.nowTotalTime = new Date();
            this.nowYear = this.nowTotalTime.getFullYear();
            this.nowMonth = this.nowTotalTime.getMonth();
            this.nowDay = this.nowTotalTime.getDate();
            this.nowHour = this.nowTotalTime.getHours();
            this.nowMinute = this.nowTotalTime.getMinutes();
            this.nowSecond = this.nowTotalTime.getSeconds();

            this.nowMonth = this.nowMonth.toString();
            this.nowMonth.length === 1 ? this.nowMonth = '0'+this.nowMonth : this.nowMonth;

            let newDay = new Date().toDateString();
            const getNewDate = days => {
                const week = ['일','월','화','수','목','금','토'];
                this.dayOfWeek = week[new Date(days).getDay()];
                return this.dayOfWeek;
            }

            getNewDate(newDay);

            this.nowHour = this.nowHour.toString();
            this.nowMinute = this.nowMinute.toString();
            this.nowSecond = this.nowSecond.toString();

            this.nowHour.length === 1 ? this.nowHour = '0' + this.nowHour : this.nowHour;
            this.nowMinute.length === 1 ? this.nowMinute = '0' + this.nowMinute : this.nowMinute;
            this.nowSecond.length === 1 ? this.nowSecond = '0' + this.nowSecond : this.nowSecond;

            this.$refs.nowLiveTime.innerText = `${this.nowHour}:${this.nowMinute}:${this.nowSecond}`;
        }
    }
}
</script>

<style scoped>
#home, #category, #visitor {
    transition: .25s ease-in;
}

#home::after, #home::before,
#category::after, #category::before,
#visitor::after, #category::before {
    content: "";
    position: absolute;
    z-index: -1;
}

#home::after, #category::after, #visitor::after {
    height: 100%;
    left: -55%;
    top: 0;
    transform: skew(50deg);
    transition-duration: .6s;
    transform-origin: top left;
    width: 0;
}

#home:hover:after, #category:hover:after, #visitor:hover:after {
    height: 100%;
    width: 200%;
    background-color: #1ABC9C;
}

#home:hover, #category:hover, #visitor:hover {
    color: #fff !important;
    font-weight: bold;
}
</style>