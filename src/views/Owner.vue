<template>
  <div class="parent">
    <div class="content">
      <h1>オーナー</h1>
      <p class="itemId">{{ $route.params.id }}</p>
      <v-btn outline @click="start" color="blue">スタート</v-btn>
      <v-btn outline @click="open" color="red">開封する</v-btn>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";

export default {
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
      alert("open");
    }
  }
};
</script>
