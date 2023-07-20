<template>
    <header class="w-[89%] mx-auto mr-0 right-0 z-40 border-b bg-white"
            :class="{ 'fixed' : this.$route.path.includes('/category') === false }">
        <h1 class="text-3xl text-center py-8">
            춤추는 프론트엔드<span class="text-lg">(비열함)</span>
        </h1>

        <ul class="flex justify-center gap-32">
            <li v-for="(item, index) in gnbList"
                :key="item.id"
                :class="{ 'border-b-4 border-[#1ABC9C]' : this.$route.path.includes(item.gnbPath) }">
                <router-link :id="item.gnbName.toLowerCase()"
                             :to="item.gnbPath"
                             class="relative inline-block rounded z-10 overflow-hidden px-4 py-1">
                    {{ item.gnbName }}
                </router-link>
            </li>
        </ul>

        <div class="text-black absolute top-8 right-8">
            <span v-html="nowYear+'.'+ nowMonth + '.' + nowDay + '('+dayOfWeek+')'"
                  class="text-black mr-2"></span>
            <span ref="nowLiveTime"></span>
        </div>
    </header>
</template>

<script>
export default {
    name: "TopView",
    props: {
      topViewProp: {
          type: Array,
          required: true,
      }
    },
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

            gnbList: [],
        }
    },
    mounted() {
        this.gnbList = this.$props.topViewProp;
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