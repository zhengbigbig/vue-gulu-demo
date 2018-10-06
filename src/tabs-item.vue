<template>
    <div class="tabs-item" :class="itemClasses" @click="onClick">
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
                    active:this.active,
                    disabled:this.disabled
                }
            }
        },
        data(){
            return {
                active:false
            }
        },
        created(){
            if(this.eventBus){
                this.eventBus.$on('update:selected',(name)=>{
                    this.active = name === this.name;
                })
            }
        },
        methods:{
            onClick(){
                if(this.disabled){return }
                this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
                this.$emit('click',this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $active-color:blue;
    $disabled-text-color: grey;
    .tabs-item {
        padding:0 1em;
        flex-shrink: 0;
        cursor: pointer;
        height:100%;
        display: flex;
        align-items: center;
        &.active {
            color:$active-color;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>