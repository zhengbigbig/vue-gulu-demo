<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <!--v-if 会控制div 是否显示在DOM里-->
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsHead",
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',(item,vm)=>{
                console.log(vm);
                // 若新增一个[更新UI任务，会放在任务队列里面，因此必须将后续处理让在更新UI任务后面]
                let {width,height,top,left} = vm.$el.getBoundingClientRect()
                let parentLeft = this.$el.getBoundingClientRect().left
                let distanceLeft = left - parentLeft
                console.log(width, height, top, left);
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.transform = `translateX(${distanceLeft}px)`
            })
        }
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;
    $border-color:#ddd;
    .tabs-head {
        display: flex;
        height:$tab-height;
        justify-content: flex-start;
        align-items: center;
        border-bottom:1px solid $border-color;
        position: relative;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid $blue;
            transition: all 350ms;
        }
        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding:0 1em;
        }
    }
</style>