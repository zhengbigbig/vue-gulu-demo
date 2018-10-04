import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import InputComponent from './input-component'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Header from './header'
import Toast from './toast'
import Plugin from './plugin'

Vue.use(Plugin)
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',InputComponent)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-footer',Footer)
Vue.component('g-content',Content)
Vue.component('g-header',Header)
Vue.component('g-toast',Toast)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        message:'hello world'
    },
    methods:{
        showToast(){
            this.$toast('我是message',{
                enableHtml:false,
                closeButton:{
                    text:'关闭',
                    callback(toast){
                        toast.log('请写入下一步代码')
                    }
                },
                autoClose:true,
                autoCloseDelay:5,
                position:'middle'
            })
        }
    },
    created(){

    }
})

