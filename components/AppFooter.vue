<template>
  <div class="app-footer">
    <p class="record">
      本站部分资源收集于网络,只做学习和交流使用,版权归原作者所有
    </p>
    <p class="record">
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >冀ICP备2023017514号-1</a
      >
    </p>
  </div>
</template>

<script setup>
const footerNavList = [];
</script>

<style lang="scss" scoped>
.app-footer {
  padding: 8px 0;
  background-color: #2c2c2c;
  overflow: hidden;
  .record {
    margin: 0 0 10px 0;
    text-align: center;
    color: #fff;
    font-size: 12px;
    a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: rgb(50, 140, 243);
      }
    }
  }
}
</style>