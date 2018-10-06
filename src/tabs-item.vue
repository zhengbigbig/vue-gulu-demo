<template>
    <div class="tabs-item" :class="itemClasses" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsItem",
        inject:['eventBus'],
        props: {
            disabled: {
                type:Boolean,
                default:false
            },
            name:{
                type:String | Number,
                required:true
            }
        },
        computed:{
            itemClasses(){
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
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $active-color:blue;
    .tabs-item {
        padding:0 1em;
        flex-shrink: 0;
        cursor: pointer;
        height:100%;
        display: flex;
        align-items: center;
        &.active {
            color:$active-color;
            /*font-weight: bold;*/
        }
    }
</style>