import Vue from 'vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import Login from '@/views/Login'
import LoginForm from '@/components/LoginForm'
import { expect } from 'chai'

describe('Login.vue', () => {

  it('should render correct contents', () => {
    const wrapper = mount(Login)
    expect(wrapper.findComponent(LoginForm).exists()).to.true
  })
})
