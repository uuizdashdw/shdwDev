<template>
    <div class="">
        짜잔
        <button @click="isClosedOn">
            닫아
        </button>
    </div>
</template>

<script>
export default {
    name: "OnRightSide",
    data(){
        return {
            isCloseToggleBtn: false,
        }
    },
    props: {

    },

    methods: {
        isClosedOn(){
            this.isCloseToggleBtn = !this.isCloseToggleBtn;

            this.$emit('isClosed', this.isCloseToggleBtn);
        }
    }
}
</script>

<style scoped>

</style>