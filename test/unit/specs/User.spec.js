import Vue from 'vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import User from '@/views/User'
import { expect } from 'chai'

describe('User.vue', () => {
  let timer

  beforeEach(() => {
    timer = sinon.spy(User.methods, 'timer')
  });
  afterEach(() => {
    timer.restore()
    localStorage.lastLogin = undefined
  });

  it('should render correct contents', () => {
    localStorage.lastLogin = '2021-01-22T10:19:58.736Z'
    const wrapper = mount(User)
    expect(wrapper.find('h1').exists()).to.true
    expect(wrapper.find('h4').exists()).to.true
    expect(wrapper.find('.timer').exists()).to.true
    expect(wrapper.vm.lastLogin).to.equals('2021-01-22T10:19:58.736Z')
    expect(wrapper.vm.days).to.equals(0)
    expect(wrapper.vm.hours).to.equals(0)
    expect(wrapper.vm.minutes).to.equals(0)
    expect(wrapper.vm.seconds).to.equals(0)
  })

  it('should set lastLogin to null', () => {
    localStorage.lastLogin = '2021-01-22T10:19:58.736Z'
    const wrapper = mount(User)
    wrapper.vm.logout()
    expect(localStorage.lastLogin).to.equal('null')
  })

  it('should start timer when lastLogin is not null', () => {
    localStorage.lastLogin = '2021-01-22T10:19:58.736Z'
    mount(User)
    sinon.assert.calledOnce(timer)
  })
})
