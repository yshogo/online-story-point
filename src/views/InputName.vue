<template>
  <div class="parent">
    <div class="content">
      <h1>名前を入力する</h1>
      <h3 class="form-title">表示名</h3>
      <v-text-field v-model="name" label="例: shogo yamada" solo />
      <v-list-tile>
        <v-list-tile-action>
          <v-checkbox v-model="isChecked"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>オーナーの方はここをチェック</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-btn
        outline
        color="blue"
        @click="$router.push({name: 'story_point', params: {name: name, isChecked: isChecked}})"
      >部屋にはいる</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      isChecked: false
    };
  }
};
</script>

<style scoped>
.form-title {
  margin-top: 20px;
}
</style>
