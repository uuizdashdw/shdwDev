<template>
    <div class="p-8 w-full">
        <div class="container mx-auto">
            <h2 class="text-xl mb-20">방명록</h2>

            <ul class="flex items-center justify-end gap-10 mb-4">
                <li>
                    <label for="userName" class="mr-7">이름</label>
                    <input type="text"
                           id="userName"
                           v-model="userName"
                           class="h-7 border rounded focus:outline-[#1ABC9C] pl-2"/>
                </li>
                <li>
                    <label for="userPassword"
                           class="mr-7">비밀번호</label>
                    <input id="userPassword"
                           v-model="userPassword"
                           type="password"
                           class="h-7 border rounded focus:outline-[#1ABC9C] pl-2" />
                </li>
            </ul>

            <div class="w-5/12 flex items-center mr-0 mx-auto mb-4">
                <label for="visitorTitle" class="w-[60px]">
                    제목
                </label>
                    <input id="visitorTitle"
                           type="text"
                           v-model="title"
                           class="w-full mr-0 mx-auto h-7 border rounded focus:outline-[#1ABC9C] pl-2 py-2" />
            </div>
            <textarea v-model="content"
                      @keyup="isBtnDisabledFalse($event.target.value)"
                      class="w-full h-72 rounded border resize-none focus:outline-[#1ABC9C] p-4 mb-4"></textarea>

            <div class="text-right">
                <button class="px-10 py-1 border rounded text-slate-300"
                        type="button"
                        :disabled="isBtnDisabled === true"
                        @click="isSubmitUserPost">제출</button>
            </div>
        </div>

        <div>
            방명록 리스트
            <ul>
                <li v-for="(item, index) in visitorsPosts" :key="index">
                    <p>작성자: {{ item.userName }}</p>
                    <p>제목: {{ item.title }}</p>
                    <div>내용: {{ item.content }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "VisitorView",
    data(){
        return {
            visitorsPosts: [],

                userName: "",
                userPassword: "",
                secretMode: "",
                title: "",
                content: "",
                date: "",


            isBtnDisabled: true,

        }
    },

    mounted() {

    },

    methods: {
        isBtnDisabledFalse(content){
            if(this.userName !== "" && this.title !== "" && content !== ""){
                this.isBtnDisabled = false;
            } else {
                this.isBtnDisabled = true;
            }
        },

        isSubmitUserPost(){
            if(this.userName !== "" && this.title !== "" && this.content !== "") {

                let date = new Date();
                let nowYear = date.getFullYear();
                let nowMonth = date.getMonth();
                let nowDay = date.getDate();

                nowMonth = nowMonth.toString();
                nowDay = nowDay.toString();
                nowMonth.length === 1 ? nowMonth = '0' + nowMonth : nowMonth;
                nowDay.length === 1 ? nowDay = '0' + nowDay : nowDay;

                this.date = nowYear + '-' + nowMonth + '-' + nowDay;

                let param = new Object();
                param.userName = this.userName;
                param.userPassword = this.userPassword;
                param.secretMode = this.secretMode;
                param.title = this.title;
                param.content = this.content;
                param.date = this.date;


                this.visitorsPosts.push(param);
            }
        }
    }
}
</script>

<style scoped>

</style>