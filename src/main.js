// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: 'AIzaSyBi1gxCo04xhIVpqqksP7Hr0W9SkIU2aLs',
  authDomain: 'login-pwa-91589.firebaseapp.com',
  projectId: 'login-pwa-91589',
  storageBucket: 'login-pwa-91589.appspot.com',
  messagingSenderId: '290489687251',
  appId: '1:290489687251:web:1f8aa924d70b13c0744826',
  measurementId: 'G-XPWQT7RMLL'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
