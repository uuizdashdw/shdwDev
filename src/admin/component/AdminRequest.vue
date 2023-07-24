<template>
    <div class="h-screen flex items-center justify-center">
        <ul class="inline-flex flex-col items-end">
            <li :class="{ 'mb-8' : isShowIdError === false || isShowIdError === '' }">
                <label class="text-xl">
                    <span class="mr-4">아이디</span>
                    <input type="text"
                           v-model="adminId"
                           class="border pl-2 h-8 rounded focus:outline-[#1ABC9C]"
                           autocomplete="off" />
                </label>
                <p v-show="isShowIdError === true"
                   class="text-right text-sm py-1.5 text-red-600">* 아이디가 일치하지 않습니다.</p>
            </li>
            <li :class="{ 'mb-10' : isShowPwError === false || isShowPwError === '' }">
                <label class="text-xl">
                    <span class="mr-4">비밀번호</span>
                    <input type="password"
                           v-model="adminPassword"
                           ref="adminPassword"
                           @keydown.enter="isEnteredAdmin"
                           class="border pl-2 h-8 rounded focus:outline-[#1ABC9C]" />
                </label>
                <p v-show="isShowPwError === true"
                   class="text-right text-sm py-2.5 text-red-600">* 비밀번호가 일치하지 않습니다.</p>
            </li>
            <li class="w-full">
                <button type="button"
                        :disabled="isDisabled === true"
                        :class="{ 'text-zinc-300' : isDisabled === true , 'text-[#1ABC9C] border-[#1ABC9C] font-bold' : isDisabled === false }"
                        @click="isEnteredAdmin"
                        class="w-full border py-2 rounded text-xl transition-all">입력</button>
            </li>
        </ul>
    </div>
</template>

<script>
import data from '../data/data';
export default {
    name: "AdminRequest",
    data(){
        return {
            data: data,
            adminId: '',
            adminPassword: '',
            isDisabled: true,

            isShowIdError: '',
            isShowPwError: '',

            isEnterAdmin: false,
        }
    },

    mounted() {

    },

    watch: {
      adminPassword(value){
          data.password !== value ? this.isShowPwError = true : this.isShowPwError = false;

          if(data.id === this.adminId && data.password === this.adminPassword) {
              this.isDisabled = false;
          } else {
              this.isDisabled = true;
          }
      },
        adminId(value){
            data.id !== value ? this.isShowIdError = true : this.isShowIdError = false;

            if(this.isShowIdError === false && this.isShowPwError === false && this.isDisabled === true) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        }
    },

    methods: {
        isEnteredAdmin(){
            if(data.id === this.adminId && data.password === this.adminPassword){
                this.isEnterAdmin = true;
                this.$cookies.set('adminId', `${this.adminId}`);


                this.$emit('updateAdmin', this.isEnterAdmin);
            }
        }
    }
}
</script>

<style scoped>

</style>