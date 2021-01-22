<template>
  <div>
    <LoginForm v-on:doLogin="login" :error="error" />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import router from '@/router'
import firebase from 'firebase'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  data () {
    return {
      error: null
    }
  },
  methods: {
    login (loginData) {
      firebase
        .auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(res => {
          localStorage.lastLogin = res.user.metadata.lastSignInTime
          router.push({name: 'User'})
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
