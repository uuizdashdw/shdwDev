<template>
    <div class="p-8 w-full">
        <div class="container mx-auto mb-20">
            <div class="text-2xl mb-20 text-center">
                <p>방명록을 남겨주세요!</p>
                <p>저에게 큰 힘이 됩니다! :)</p>
            </div>

            <ul class="flex items-center justify-end gap-10 mb-4">
                <li>
                    <label for="userName"
                           class="mr-7">이름</label>
                    <input type="text"
                           id="userName"
                           v-model="userName"
                           ref="userName"
                           autocomplete="off"
                           class="h-7 border rounded focus:outline-[#1ABC9C] pl-2"/>
                </li>
                <li>
                    <label for="userPassword"
                           class="mr-7">비밀번호</label>
                    <input id="userPassword"
                           v-model="userPassword"
                           ref="userPassword"
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
                       ref="title"
                       autocomplete="off"
                       class="w-full mr-0 mx-auto h-7 border rounded focus:outline-[#1ABC9C] pl-2 py-2" />
            </div>
            <textarea v-model="context"
                      ref="content"
                      class="w-full h-72 rounded border resize-none focus:outline-[#1ABC9C] p-4 mb-4"></textarea>

            <div class="text-right">
                <button class="px-10 py-1 border rounded transition-all"
                        :class="
                        {
                        'text-slate-300' : userName === '' || userPassword === '' || title === '' || context === '' ,
                        'text-white border-[#1ABC9C] bg-[#1ABC9C]' : userName !== '' && userPassword !== '' && title !== '' && context !== ''
                        }"
                        type="button"
                        :disabled="userName === '' || userPassword === '' || title === '' || context === ''"
                        @click="isSubmitUserPost">작성</button>
            </div>
        </div>

        <div class="container mx-auto">
            <h2 v-if="visitorsPosts.length <= 0 || isRemovedPostState === true"
                class="text-2xl mb-10">&#127783; 아직 작성된 방명록이 없어요.. :( &#127783; &nbsp;&nbsp; 1등으로 작성해보세요! &#127774;</h2>
            <h2 v-else
                class="text-2xl mb-10">&#127752; 지금까지 무려 {{ visitorsPosts.length }}개나 적어주셨어요! :) &#127774;&#127752;</h2>
            <ul>
                <li  v-for="(item, index) in visitorsPosts"
                     :key="index"
                     class="mb-10 pb-10 border-b last:border-b-0 flex items-center justify-between"
                     :class="{ 'gap-10' : isShowCommentEdit === true }">
                    <template v-if="item.isRemoved === false">
                        <ul v-if="isShowCommentEdit === false">
                            <li class="mb-1">
                                {{ item.content_id }}등으로 남겨주신 <span class="mr-1 text-lg">{{ item.userName }}</span><span class="text-sm">님!</span>
                            </li>
                            <li class="mb-1">
                                {{ item.title }}
                            </li>
                            <li>
                                {{ item.context }}
                            </li>
                        </ul>

                        <ul v-else
                            class="w-10/12">
                            <li class="mb-4 flex justify-end items-center">
                                <label class="mr-8">
                                    <span class="mr-4">이름</span>
                                    <input type="text"
                                           class="border h-7 p-2 rounded focus:outline-[#1ABC9C]"
                                           v-model="isEditedUserName"/>
                                </label>
                                <label>
                                    <span class="mr-4">제목</span>
                                    <input type="text"
                                           class="border h-7 p-2 rounded focus:outline-[#1ABC9C]"
                                           v-model="isEditedTitle"/>
                                </label>
                            </li>
                            <li class="flex justify-between items-start">
                                <label class="inline-block w-12">내용</label>
                                <textarea class="w-full h-32 p-3 border rounded focus:outline-[#1ABC9C] resize-none"
                                          v-model="isEditedContext" />
                            </li>
                        </ul>

                        <ul class="flex items-center gap-3">
                            <li>
                                <button type="button"
                                        @click="isEditedComment(item.content_id)"
                                        class="border px-6 py-1 rounded text-slate-300 listBtn relative inline-block overflow-hidden hover:border-[#1ABC9C]">
                                    수정
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                        @click="isRemoveComment(item.content_id)"
                                        class="border px-6 py-1 rounded text-slate-300 listBtn relative inline-block overflow-hidden hover:border-[#1ABC9C]">
                                    삭제
                                </button>
                            </li>
                        </ul>
                    </template>
                    <template v-else-if="item.isRemoved === true"
                              class="mb-10 pb-10 border-b last:border-b-0 flex items-center justify-between">
                        삭제된 댓글입니다.
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import data from '../data/index';
export default {
    name: "VisitorView",
    watch: {
        visitorsPosts(){
            console.log("변경");
        },
    },
    computed: {
        data(){
            console.log("삭제되거나 추가됨");
        }
    },
    data(){
        return {
            visitorsPosts: data.comment,
            getPostsFromCookie: [],
            userName: "",
            userPassword: "",
            secretMode: "",
            title: "",
            contentId: 1,
            context: "",
            date: "",
            isRemoved: false,
            isRemovedPostState: false,

            isShowCommentEdit: false,
            isEditedContext: "",
            isEditedTitle: "",
            isEditedUserName: "",

        }
    },

    mounted() {
        this.visitorsPosts = data.comment;
        console.log("왜이러냐 또", this.visitorsPosts);

        this.visitorsPosts.forEach((item, index) => {
            item.isRemoved === false ? this.isRemovedPostState = false : this.isRemovedPostState = true;
        })
    },

    methods: {
        isSubmitUserPost(){
            if(this.userName !== "" && this.title !== "" && this.context !== "" && this.userPassword !== "") {

                let date = new Date();
                let nowYear = date.getFullYear();
                let nowMonth = date.getMonth();
                let nowDay = date.getDate();

                nowMonth = nowMonth.toString();
                nowDay = nowDay.toString();
                nowMonth.length === 1 ? nowMonth = '0' + nowMonth : nowMonth;
                nowDay.length === 1 ? nowDay = '0' + nowDay : nowDay;

                this.date = nowYear + '-' + nowMonth + '-' + nowDay;

                data.comment.length !== 0 ? this.contentId = data.comment.length + 1 : this.contentId;

                if(data.comment.length !== 0){
                    console.log("0 아님");
                } else {
                    console.log("0임");
                }

                let param = new Object();
                param.userName = this.userName;
                param.userPassword = this.userPassword;
                param.secretMode = this.secretMode;
                param.title = this.title;
                param.content_id = this.contentId;
                param.context = this.context;
                param.created_at = this.date;
                param.updated_at = null;
                param.isRemoved = this.isRemoved;

                data.comment.push(param);

                this.$swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '방명록이 저장되었습니다!',
                    text: '작성해주셔서 감사합니다',
                    showConfirmButton: true,
                    confirmButtonText: '확인',
                }).then((res) => {
                    if(res.isConfirmed) {
                        this.$router.push('/home');
                    }
                })
                // this.getPostsFromCookie.push(param);

                //
                // this.isBtnDisabled = true;
            }
        },

        isRemoveComment(idx){
            console.log(idx);
            let tmp = idx - 1;

            this.$swal.fire({
                title: '비밀번호를 입력해주세요',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off',
                },
                showCancelButton: true,
                confirmButtonText: '확인',
                showLoaderOnConfirm: true,
                preConfirm: password =>  {
                    if(password === data.comment[tmp].userPassword) {

                        console.log('idx = ', idx);
                        console.log('idx - 1 = ', idx - 1);
                        console.log("data.comment = ", data.comment);

                        console.log("data.comment[idx].isRemoved = " , data.comment[idx-1].isRemoved);
                        data.comment[tmp].isRemoved = true;
                    } else {
                        this.$swal.showValidationMessage('비밀번호가 틀렸습니다');
                    }
                },
                allowOutsideClick: () => !this.$swal.isLoading()
            }).then((res) => {
                if(res.isConfirmed) {
                    this.$swal.fire({
                        title: '삭제되었습니다',
                    }).then((res) => {
                        res.isConfirmed ? this.$router.push('/home') : this.$router.push('/home');
                    })
                }
            })
        },

        isEditedComment(idx){
            let tmp = idx - 1;

            if(this.isShowCommentEdit === false){
                this.$swal.fire({
                    title: '비밀번호를 입력해주세요',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off',
                    },
                    showCancelButton: true,
                    confirmButtonText: '확인',
                    showLoaderOnConfirm: true,
                    preConfirm: password =>  {
                        if(password === data.comment[tmp].userPassword) {
                            this.isShowCommentEdit = true;

                            console.log(data.comment);
                        } else {
                            this.isShowCommentEdit = false;
                            this.$swal.showValidationMessage('비밀번호가 틀렸습니다');
                        }
                    },
                    allowOutsideClick: () => !this.$swal.isLoading()
                })
            } else {
                if(this.isEditedUserName !== '' && this.isEditedTitle !== '' && this.isEditedContext !== ''){
                    data.comment[tmp].userName = this.isEditedUserName;
                    data.comment[tmp].title = this.isEditedTitle;
                    data.comment[tmp].context = this.isEditedContext;

                    this.$swal.fire({
                        title: '수정 완료',
                        text: '수정이 완료되었습니다!',
                        confirmButtonText: '확인',
                    }).then((res) => {
                        res.isConfirmed ? this.$router.push('/home') : this.$router.push('/home');
                    })

                }
            }

        }
    }
}
</script>

<style scoped>
.listBtn {
    transition: .25s ease-in;
}

.listBtn::after, .listBtn::before {
    content: "";
    position: absolute;
    z-index: -1;
}

.listBtn::after {
    height: 100%;
    left: -55%;
    top: 0;
    transform: skew(50deg);
    transition-duration: .6s;
    transform-origin: top left;
    width: 0;
}

.listBtn:hover:after {
    height: 100%;
    width: 200%;
    background-color: #1ABC9C;
}

.listBtn:hover {
    color: #fff !important;
    font-weight: bold;
}
</style>