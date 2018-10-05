const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    //BDD 行为驱动测试
    //行为描述
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props',function(){
/*        this.timeout(50000)*/
        it('接收 autoClose',(done)=>{
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    autoClose:1
                }
            }).$mount(div)
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
                vm.$el.remove()
                vm.$destroy()
            })
        })
        it('接收 closeButton',()=>{
            const callback = sinon.fake();
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    closeButton:{
                        text:'关闭吧',
                        callback
                    }
                }
            }).$mount(div)
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it( '接受 enableHtml',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    enableHtml:true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it(
            '接受 position',()=>{
                const Constructor = Vue.extend(Toast)
                const vm = new Constructor({
                    propsData:{
                        position:'bottom'
                    }
                }).$mount()
                expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
            })
    })

})