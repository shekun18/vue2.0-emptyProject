<template>
  <div class="app">
    <header class="header">
      通讯录
    </header>
    <div class="search-bar">
      <input type="text" placeholder="搜索" />
    </div>
    <div class="company">
      <h2>XXXXXX有限公司</h2>
      <ul class="department-list">
        <li v-for="(department, index) in departments" :key="index">
          {{ department }}
          <span class="arrow">></span>
        </li>
      </ul>
    </div>
    <nav class="bottom-nav">
      <div class="nav-item">
        <i class="iconfont">&#xe88b;</i>
        工作台
      </div>
      <div class="nav-item">
        <i class="iconfont">&#xe64a;</i>
        消息
      </div>
      <div class="nav-item active">
        <i class="iconfont">&#xe636;</i>
        通讯录
      </div>
      <div class="nav-item">
        <i class="iconfont">&#xe600;</i>
        我的
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departments: [
        '公司领导',
        '公司管理部',
        '公司综合部',
        '公司采购部'
      ]
    };
  }
};
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  text-align: center;
  font-size: 18px;
  padding: 15px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
}
.search-bar {
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}
.search-bar input {
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
}
.company {
  background-color: white;
  margin-top: 10px;
  padding: 10px;
}
.company h2 {
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
}
.department-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.department-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  color: #333;
}
.arrow {
  color: #ccc;
}
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid #e0e0e0;
  padding: 5px 0;
}
.nav-item {
  text-align: center;
  color: #666;
  font-size: 12px;
}
.nav-item i {
  display: block;
  font-size: 24px;
  margin-bottom: 5px;
}
.nav-item.active {
  color: #007aff;
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 24px;
}
</style>