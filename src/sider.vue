<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button class="button" @click="visible=false">close</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'GuluSider',
        data(){
            return {
                visible: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .sider{
        position: relative;
        > .button{
            position: absolute;
            top:0;
            right:0;
            z-index:1;
        }
    }
    .slide-enter-active, .slide-leave-active{
        transition:all .5s;
    }
    .slide-enter, .slide-leave-to{
        margin-left:-50px;
    }
</style>