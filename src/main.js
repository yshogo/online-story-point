import Vue from 'vue'
import './plugins/vuetify'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyBiIhgnGG1xuPutmvHXpxQXStqdkrvPFl0",
    authDomain: "online-storypoint.firebaseapp.com",
    databaseURL: "https://online-storypoint.firebaseio.com",
    projectId: "online-storypoint",
    storageBucket: "",
    messagingSenderId: "371836404437",
    appId: "1:371836404437:web:1ae0e65d6fe06427"
}
firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')