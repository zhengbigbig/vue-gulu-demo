const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    //BDD 行为驱动测试
    //行为描述
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props',()=> {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '张三'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('张三')
        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你好啊'
                }
            }).$mount()
            const useElements = vm.$el.querySelector('use')
            expect(useElements.getAttribute('xlink:href')).to.equal('#icon-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你好啊')
        })
    })
    describe('event',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件',()=>{
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName,callback)
                // trigger input change event
                let event = new Event(eventName);
                Object.defineProperty(
                    event,'target',{
                        value: {value: 'hi'}, enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })

        })
    })
})