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
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

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
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

new Vue({
    el:'#app',
    data:{
        selectedTab:'woman'
    },
    methods:{
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(options){
            this.$toast('我是message',{
                enableHtml:false,
                closeButton:{
                    text:'关闭',
                    callback(toast){
                        toast.log('请写入下一步代码')
                    }
                },

                position:options
            })
        }
    },
    created(){

    }
})

