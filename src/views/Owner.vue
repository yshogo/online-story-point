<template>
  <div class="parent">
    <div class="content">
      <h1>オーナー</h1>
      <p class="itemId">{{ $route.params.id }}</p>
      <v-btn outline @click="start" color="blue">スタート</v-btn>
      <v-btn outline @click="open" color="red">開封する</v-btn>
      <div v-for="res in result" :key="res.id">
        <div v-for="user in res.users" :key="user.name">
          <v-list-tile>
            <v-list-tile-content class="item">
              <v-list-tile-title>{{user.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{user.number}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";

export default {
  data() {
    return {
      result: []
    };
  },
  methods: {
    start: function(event) {
      const id = document.querySelector(".itemId").textContent;
      firebase
        .firestore()
        .collection("room")
        .doc(id)
        .collection("subject")
        .add({ flg: false });
    },
    open: function(event) {
      const id = document.querySelector(".itemId").textContent;
      firebase
        .firestore()
        .collection("room")
        .doc(id)
        .collection("subject")
        .get()
        .then(snapshot => {
          const array = [];
          var i = 0;
          snapshot.forEach(doc => {
            firebase
              .firestore()
              .collection("room")
              .doc(id)
              .collection("subject")
              .doc(doc.id)
              .collection("user")
              .get()
              .then(doc2 => {
                const userInfo = [];
                doc2.forEach(num => {
                  userInfo.push({ name: num.id, number: num.data().number });
                });
                array.push({
                  id: doc.id,
                  users: userInfo,
                  index: i
                });
              });
            i++;
          });
          this.result = array;
          console.log(this.result);
        });
    }
  }
};
</script>
