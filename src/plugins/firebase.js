import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBiIhgnGG1xuPutmvHXpxQXStqdkrvPFl0",
    authDomain: "online-storypoint.firebaseapp.com",
    databaseURL: "https://online-storypoint.firebaseio.com",
    projectId: "online-storypoint",
    storageBucket: "",
    messagingSenderId: "371836404437",
    appId: "1:371836404437:web:1ae0e65d6fe06427"
});

export const db = firebaseApp.firestore();