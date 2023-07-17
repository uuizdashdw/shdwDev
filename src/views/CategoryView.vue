<template>
    <div class="p-8 w-full h-full">
        <div class="container mx-auto h-[979px] flex justify-center">
            <ul class="flex items-center justify-center gap-16">
                <li v-for="(item, index) in categoryList"
                    :key="index"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000">
                    <router-link :to="`/category/detail/${item.title.toLowerCase()}`"
                                 :id="item.title.toLowerCase()"
                                 class="text-xl relative inline-block rounded z-10 overflow-hidden px-4 py-1">
                        #{{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoryView",
    props: {
        mainProp: {
            type: Array,
            required: true,
        }
    },
    data(){
        return {
            categoryList:[],
        }
    },

    mounted() {
        this.categoryList = this.$props.mainProp;
    },

    methods: {

    }
}
</script>

<style scoped>
#html, #css, #javascript, #typescript, #framework, #cs , #theory {
    transition: .25s ease-in;
}

#html::after, #html::before,
#css::after, #css::before,
#javascript::after, #javascript::before,
#typescript::after, #typescript::before,
#framework::after, #framework::before,
#cs::after, #cs::before,
#theory::after, #theory::before {
    content: "";
    position: absolute;
    z-index: -1;
}

#html::after, #css::after, #javascript::after, #typescript::after,
#framework::after, #cs::after, #theory::after {
    height: 100%;
    left: -55%;
    top: 0;
    transform: skew(50deg);
    transition-duration: .6s;
    transform-origin: top left;
    width: 0;
}

#html:hover:after, #css:hover:after, #javascript:hover:after, #typescript:hover:after,
#framework:hover:after, #cs:hover:after, #theory:hover:after {
    height: 100%;
    width: 200%;
    background-color: #1ABC9C;
}

#html:hover, #css:hover, #javascript:hover, #typescript:hover, #framework:hover,
#cs:hover, #theory:hover {
    color: #fff !important;
    font-weight: bold;
}
</style>