<template>
    <header class="fixed left-1/2 -translate-x-1/2 w-full border-b bg-white">
        <h1 class="text-3xl text-center py-8">춤추는 프론트엔드<span class="text-lg">(비열함)</span></h1>

        <div class="">
            <ul class="flex justify-center gap-32">
                <li class="transition-all"
                    :class="{ 'border-b-4 border-[#1ABC9C]' : this.$route.path === '/home' }">
                    <router-link id="home"
                                 to="/home"
                                 class="relative inline-block rounded z-10 overflow-hidden px-4 py-1"
                                 >HOME</router-link>
                </li>
                <li class="transition-all"
                    :class="{ 'border-b-4 border-[#1ABC9C]' : this.$route.path === '/category' }">
                    <router-link id="category"
                                 to="/category"
                                 class="relative inline-block rounded z-10 overflow-hidden px-4 py-1">CATEGORY</router-link>
                </li>
                <li class="transition-all"
                    :class="{ 'border-b-4 border-[#1ABC9C]' : this.$route.path === '/visitor' }">
                    <router-link id="visitor"
                                 to="/visitor"
                                 class="relative inline-block rounded z-10 overflow-hidden px-4 py-1">VISITOR</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "TopView"
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