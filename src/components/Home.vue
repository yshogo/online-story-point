<template>
  <div class="parent">
    <div class="content">
      <h1>オンラインストーリーポイント</h1>
      <v-btn outline @click="$router.push('create_room')" color="indigo">部屋を作成する</v-btn>
      <v-btn outline @click="$router.push('room_list')" color="green">部屋を探す</v-btn>
    </div>
  </div>
</template>

<script>
export default { name: "Home" };
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
</style>
