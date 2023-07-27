<template>
    <div>
        <div class="flex justify-between items-center">
            <div>
                {{ nowYear }}.{{ nowMonth }}.{{ nowDay }} ({{ dayOfWeek }})
            </div>
            <button type="button"
                    @click="isClosedOn">
                닫기
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "OnRightSide",
    data(){
        return {
            isCloseToggleBtn: false,
            today: "",
            nowYear: "",
            nowMonth: "",
            nowDay: "",
            dayOfWeek: "",
        }
    },
    mounted() {
        this.getTodayDate();
    },

    methods: {
        isClosedOn(){
            this.isCloseToggleBtn = !this.isCloseToggleBtn;
            this.$emit('isClosed', this.isCloseToggleBtn);
            console.log("실행")
        },

        getTodayDate(){
            this.today = new Date();
            this.nowYear = this.today.getFullYear();
            this.nowMonth = this.today.getMonth();
            this.nowDay = this.today.getDate();

            this.nowMonth = this.nowMonth.toString();
            this.nowMonth.length === 1 ? this.nowMonth = '0'+this.nowMonth : this.nowMonth;

            let newDate = new Date().toDateString();
            const getNewDate = days => {
                const week = ['일','월','화','수','목','금','토'];
                this.dayOfWeek = week[new Date(days).getDay()];
                return this.dayOfWeek;
            }

            getNewDate(newDate);
        }
    }
}
</script>

<style scoped>

</style>