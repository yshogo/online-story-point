<template>
  <div class="content">
    <h1>部屋一覧</h1>
    <div v-for="room in rooms" :key="room.key">
      <p>{{room.id.ownerName}}</p>
      <p>{{room.id.roomName}}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      rooms: []
    };
  },
  mounted() {
    firebase
      .firestore()
      .collection("room")
      .get()
      .then(snapshot => {
        const array = [];
        snapshot.forEach(doc => {
          const id = doc.id;
          array.push({ id: doc.data() });
        });
        this.rooms = array;
      });
  }
};
</script>
