<template>
<div id="container">
  <h1>Welcome</h1>
  <h4>The last time you accessed was</h4>
  <section class="timer">
    <span class="number">{{days}}</span>
    <span class="number">{{hours}}</span>
    <span class="number">{{minutes}}</span>
    <span class="number">{{seconds}}</span>
    <span>Days</span>
    <span>Hours</span>
    <span>Minutes</span>
    <span>Seconds</span>
  </section>
  <button v-on:click="logout">LOGOUT</button>
</div>

</template>

<script>
import router from '@/router'
import moment from 'moment'

export default {
  name: 'user',
  data () {
    return {
      lastLogin: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mounted () {
    if (localStorage.lastLogin !== 'null') {
      this.lastLogin = localStorage.lastLogin
      this.timer()
    } else {
      router.replace({name: 'Login'})
    }
  },
  methods: {
    logout () {
      if (localStorage.lastLogin) {
        localStorage.lastLogin = 'null'
        clearInterval(this.interval)
        router.replace({name: 'Login'})
      }
    },
    timer () {
      let dateStart = moment(this.lastLogin)

      this.interval = setInterval(function () {
        let now = moment()
        let diff = moment(now.diff(dateStart)).toObject()
        this.days = diff.days !== undefined ? diff.days : 0
        this.hours = diff.hours !== undefined ? diff.hours - 1 : 0
        this.minutes = diff.minutes !== undefined ? diff.minutes : 0
        this.seconds = diff.seconds !== undefined ? diff.seconds : 0
      }.bind(this), 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.timer {
  display: grid;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.number {
  font-weight: bold;
  font-size: 2rem;
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
</style>