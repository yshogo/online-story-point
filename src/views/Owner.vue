<template>
  <div class="parent">
    <div class="content">
      <h1>オーナー管理画面</h1>
      <p class="itemId">{{ $route.params.id }}</p>
      <v-btn outline @click="start" color="blue">スタート</v-btn>
      <v-btn outline @click="open" color="red">開封する</v-btn>
      <div v-for="res in result" :key="res.id">
        <h4>課題ID：{{res.id}}</h4>
        <table>
          <tr>
            <th>名前</th>
            <th>ストーリーポイント</th>
          </tr>
          <tr v-for="user in res.users" :key="user.name">
            <td>{{user.name}}</td>
            <td>{{user.number}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";
import Router from "../router";

export default {
  data() {
    return {
      result: []
    };
  },
  methods: {
    start: function(event) {
      const id = document.querySelector(".itemId").textContent;
      if (id == null || id == "") {
        Router.push("room_list");
        return;
      }
      firebase
        .firestore()
        .collection("room")
        .doc(id)
        .collection("subject")
        .add({ flg: false });
    },
    open: function(event) {
      const id = document.querySelector(".itemId").textContent;
      if (id == null || id == "") {
        Router.push("room_list");
        return;
      }
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

<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

table tr {
  border-bottom: solid 1px #eee;
}

table th,
table td {
  text-align: center;
  width: 25%;
  padding: 15px 0;
}

table td.icon {
  background-size: 35px;
  background-position: left 5px center;
  background-repeat: no-repeat;
  padding-left: 30px;
}
</style>

