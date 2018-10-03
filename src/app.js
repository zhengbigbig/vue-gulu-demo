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

new Vue({
    el:'#app',
    data:{
        loading1:false,
        message:'hello world'
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        }
    }
})

