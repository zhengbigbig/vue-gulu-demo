<template>
    <div class="tabs-pane" :class="paneClasses" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsPane",
        inject:['eventBus'],
        props:{
            name:{
                type:String | Number,
                required:true
            }
        },
        computed:{
            paneClasses(){
                return {
                    active:this.active
                }
            }
        },
        data(){
            return {
                active:false
            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name;
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        &.active {
            background: red;
        }
    }
</style>