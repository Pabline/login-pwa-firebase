<template>
  <div class="login">
    <img src="@/assets/icon.png" alt="Vue.js PWA">
    <form action="" @submit="submitForm" class="form">
      <input type="text" id="email" required name="email" v-model="email" placeholder="Email">
      <input type="password" id="password" required name="password" v-model="password" placeholder="Password">
      <span id="error" v-if="error">{{error}}</span>
      <button type="submit" id="login">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'loginform',
  props: {
    error: String
  },
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    submitForm (event) {
      event.preventDefault()
      this.$emit('doLogin', {email: this.email, password: this.password})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  margin-bottom: 1rem;
  width: 200px;
  height: auto;
}

input {
  border:none;
  border-bottom:1px solid #757575;
  margin-bottom: 1rem;
}

button {
  background-color: rgb(25, 115, 184); /* Green */
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
}

#error {
  color: red;
}

</style>
