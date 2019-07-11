<template>
  <div class="content">
    <h1>部屋一覧</h1>
    <div v-for="room in rooms" :key="room.key">
      <v-card class="card" @click="$router.push({name: 'input_name', params: {id: room.id}})">
        <v-list-tile>
          <v-list-tile-content class="item">
            <v-list-tile-title>{{room.data.roomName}}</v-list-tile-title>
            <v-list-tile-sub-title>オーナー：{{room.id.ownerName}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-card>
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
          array.push({ id: id, data: doc.data() });
        });
        this.rooms = array;
      });
  }
};
</script>

<style scoped>
.card {
  margin-top: 10px;
}
.item {
  margin: 10px;
}
</style>

