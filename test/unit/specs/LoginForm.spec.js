import Vue from 'vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import LoginForm from '@/components/LoginForm'
import { expect } from 'chai'

describe('LoginForm.vue', () => {
  let vm
  beforeEach(() => {
    const Constructor = Vue.extend(LoginForm)
    vm = new Constructor().$mount()
  })

  it('should render correct contents', () => {
    expect(vm.email).to.equal(null)
    expect(vm.password).to.equal(null)
    expect(vm.error).to.equal(null)
    expect(vm.$el.querySelector('#email').placeholder)
      .to.equal('Email')
    expect(vm.$el.querySelector('#password').placeholder)
      .to.equal('Password')
    expect(vm.$el.querySelector('#login').textContent)
      .to.equal('Log In')
  })

  it('Should fire login event', async () => {
    const wrapper = mount(LoginForm)
    const spy = sinon.spy()
    wrapper.find('#email').setValue('email')
    wrapper.find('#password').setValue('password')
    await wrapper.find('button#login').trigger('click')
    expect(wrapper.emitted().doLogin)
  })

  it('Should NOT fire login event', async () => {
    const wrapper = mount(LoginForm)
    const spy = sinon.spy()
    wrapper.find('#email').setValue('email')
    await wrapper.find('button#login').trigger('click')
    expect(wrapper.emitted().doLogin).to.equal(undefined)
  })
})
