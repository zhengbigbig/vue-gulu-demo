<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>
<script>
    export default {
        name: "GuluToast",
        props:{
            autoClose:{
                type:Boolean,
                default:false
            },
            autoCloseDelay:{
                type:Number,
                default:55
            },
            closeButton:{
                type:Object,
                default(){
                    return {
                        text:'关闭',callback:undefined
                    }
                }
            },
            enableHtml:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','bottom','middle'].indexOf(value) >=0
                }
            }
        },
        mounted(){
            this.updateStyles()
            this.execAutoClose()
        },
        computed:{
            toastClasses(){
                return {
                    [`position-${this.position}`]:true
                }
            }
        },
        methods:{
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height =
                        `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
                //style只获取内联元素，而不获取CSS
            },
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay * 1000)
                } 
            },
            close(){
                this.$el.remove()
                this.$destroy()
            },
            log(message){
                alert(message)
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback(this) //传入toast到回调
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-min-height:40px;
    $toast-background:rgba(0,0,0,.75);
    .toast {
        font-size:$font-size;
        line-height:1.8;
        min-height:$toast-min-height;
        position: fixed;
        display: flex;
        left:50%;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        color:white;
        border-radius: 4px;
        background:$toast-background;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5) ;
        > .line{
            height:100%;
            border-left:1px solid #666;
            margin:0 16px;
        }
        > .close{
        }
        > .message{
            padding:8px 0;
        }
        &.position-top{
            top:0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top:50%;
            transform: translate(-50%,50%);
        }
        &.position-bottom{
            bottom:0;
            transform: translateX(-50%);
        }
    }
</style>