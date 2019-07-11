<template>
  <div class="parent">
    <div class="content">
      <h1>ストーリーポイント</h1>
      <p class="id">{{ $route.params.roomId }}</p>
      <h3 class="name">{{ $route.params.name }}</h3>
      <p class="checked">{{ $route.params.isChecked }}</p>
      <div v-for="subject in subjects" :key="subject.key">
        ID:{{ subject.id }}
        <v-btn fab dark small @click="one(subject)" color="blue">
          <v-icon dark>１</v-icon>
        </v-btn>
        <v-btn fab dark small @click="two(subject)" color="blue">
          <v-icon dark>２</v-icon>
        </v-btn>
        <v-btn fab dark small @click="three(subject)" color="blue">
          <v-icon dark>３</v-icon>
        </v-btn>
        <v-btn fab dark small @click="five(subject)" color="blue">
          <v-icon dark>５</v-icon>
        </v-btn>
        <v-btn fab dark small @click="eight(subject)" color="blue">
          <v-icon dark>８</v-icon>
        </v-btn>
        <v-btn fab dark small @click="thirteen(subject)" color="blue">
          <v-icon dark>１３</v-icon>
        </v-btn>
        <v-btn fab dark small @click="twenty(subject)" color="blue">
          <v-icon dark>２１</v-icon>
        </v-btn>
        <v-btn fab dark small @click="fourty(subject)" color="blue">
          <v-icon dark>４０</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Router from "../router";

export default {
  data() {
    return {
      subjects: []
    };
  },
  methods: {
    one: function(subject) {
      this.postData(subject, 1);
    },
    two: function(subject) {
      this.postData(subject, 2);
    },
    three: function(subject) {
      this.postData(subject, 3);
    },
    five: function(subject) {
      this.postData(subject, 5);
    },
    eight: function(subject) {
      this.postData(subject, 8);
    },
    thirteen: function(subject) {
      this.postData(subject, 13);
    },
    twenty: function(subject) {
      this.postData(subject, 21);
    },
    fourty: function(subject) {
      this.postData(subject, 40);
    },
    postData: function(subject, i) {
      console.log(i);
      const id = document.querySelector(".id").textContent;
      const name = document.querySelector(".name").textContent;
      firebase
        .firestore()
        .collection("room")
        .doc(id)
        .collection("subject")
        .doc(subject.id)
        .collection("user")
        .doc(name)
        .set({
          number: i
        });
    }
  },
  mounted() {
    const id = document.querySelector(".id").textContent;
    console.log(id);
    firebase
      .firestore()
      .collection("room")
      .doc(id)
      .collection("subject")
      .onSnapshot(snapshot => {
        const array = [];
        var i = 0;
        snapshot.forEach(doc => {
          const docId = doc.id;
          array.push({ id: docId, data: doc.data(), index: i });
          i++;
        });
        this.subjects = array;
      });
    const isChecked = document.querySelector(".checked").textContent;
    if (isChecked == "true") {
      Router.push({ name: "owner", params: { id: id } });
    }
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
.id {
  display: none;
}
</style>
