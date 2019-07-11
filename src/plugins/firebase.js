import Vue from 'vue'
import firebase from "firebase"

Vue.use(firestorePlugin)

export const db = firebase
    .initializeApp({ projectId: 'online-storypoint' })
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })