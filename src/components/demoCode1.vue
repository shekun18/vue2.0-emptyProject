<template>
  <div class="container">
    <div class="input-group">
      <input type="text" placeholder="Account" class="input-field" />
      <input type="password" placeholder="Password" class="input-field" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f6fb; /* 确保背景颜色与图片一致 */
}

.input-group {
  display: flex;
  gap: 10px; /* 设置文本框之间的间距 */
  background-color: #e9eff5;
  padding: 10px;
  border-radius: 5px;
}

.input-field {
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
}
</style>