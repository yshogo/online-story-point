<template>
  <div class="parent">
    <div class="content">
      <h1>部屋を作成する</h1>
      <v-form>
        <h3 class="form-title">部屋名</h3>
        <v-text-field label="例: ZOZOTOWN Android" solo />
        <h3 class="form-title">オーナー名</h3>
        <v-text-field label="例: shogo.yamada" solo />
      </v-form>
    </div>
  </div>
</template>

<style>
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