<template>
  <div id="app">
    <button @click="signInGoogle">Google Signin</button>
  </div>
</template>

<script>
import firebase from './plugins/firebase_auth'

export default {
  name: 'App',
  methods: {
    signInGoogle () {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(user => {
          console.log(user)
        })
    }
  }
}
</script>
