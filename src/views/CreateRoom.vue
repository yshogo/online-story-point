<template>
  <div class="parent">
    <div class="content">
      <h1>部屋を作成する</h1>
      <v-form>
        <h3 class="form-title">部屋名</h3>
        <v-text-field v-model="roomName" label="例: ZOZOTOWN Android" solo />
        <h3 class="form-title">オーナー名</h3>
        <v-text-field v-model="ownerName" label="例: shogo.yamada" solo />
        <v-btn @click="onCreateRoom" color="info">作成する</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Router from "../router";

export default {
  data() {
    return {
      roomName: "",
      ownerName: ""
    };
  },
  methods: {
    onCreateRoom: function(event) {
      firebase
        .firestore()
        .collection("room")
        .add({
          roomName: this.roomName,
          ownerName: this.ownerName,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .then(doc => {
          Router.push({ name: "owner", params: { id: doc.id } });
        });
    }
  }
};
</script>


<style scoped>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.content {
  display: block;
  background: #fff;
}
.form-title {
  margin-top: 20px;
}
</style>