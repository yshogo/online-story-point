<template>
  <div class="parent">
    <div class="content">
      <h1>ストーリーポイント</h1>
      <p class="id">{{ $route.params.roomId }}</p>
      <p class="checked">{{ $route.params.roomId }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  mounted() {
    const id = document.querySelector(".id").textContent;
    firebase
      .firestore()
      .collection("room")
      .doc(id)
      .collection("subject")
      .onSnapshot(snapshot => {
        console.log(snapshot.docs);
      });
  }
};
</script>

<style scoped>
.form-title {
  margin-top: 20px;
}
.checked {
  display: none;
}
</style>
