<template>
  <div class="app-header">
    <section class="header-left">
      <Logo />
      <div class="menu">
        <ul>
          <li @click="switchoverPage('/about')">关于作者</li>
          <!-- <li>Resources</li>
                    <li>Pricing</li> -->
        </ul>
      </div>

      <div class="menu-iphone" @click="setShowVanPopUp(true)">
        <i class="iconfont icon-zhediecaidan"></i>
      </div>
    </section>
    <section class="header-right">
      <ul>
        <!-- <li>Log In</li> -->
        <li><button><a href="http://www.chaohangweb.cn:83" traget="_blank">进入博客首页</a></button></li>
      </ul>
    </section>

    <van-popup
      v-model:show="isShowVanPopUp"
      round
      position="left"
      :overlay="false"
      :style="vanPopUpStyle"
    >
      <div class="van-popup-main">
        <div class="close" @click="setShowVanPopUp(false)">
          <van-icon name="cross" size="32px" color="#c1c1c1" />
        </div>
        <ul>
          <li>关于作者</li>
          <!-- <li>Resources</li>
                    <li>Pricing</li> -->
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
const isShowVanPopUp = ref(false);
const router = useRouter();

const vanPopUpStyle = {
  width: "70%",
  height: "100%",
};

function setShowVanPopUp(status) {
  isShowVanPopUp.value = status;
}

function switchoverPage(path) {
  router.push(path);
}
</script>

<style lang="scss" scoped>
.app-header {
  padding: 0 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  overflow: hidden;
  background-color: $header-bg-color;
  box-sizing: border-box;
  .header-left {
    display: flex;
    align-items: center;
    .menu {
      margin-top: 9px;
      margin-left: 20px;
      height: 100%;
      ul {
        li {
          height: 100%;
          display: flex;
          align-items: center;
          margin-right: 20px;
          color: #fff;
          float: left;
          cursor: pointer;
          &:hover {
            color: $nav-hover-color;
          }
        }
      }
    }
    .menu-iphone {
      margin-top: -14px;
      margin-left: 6px;
      display: none;
      i {
        font-size: 42px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .header-right {
    display: flex;
    ul {
      li {
        height: 100%;
        display: flex;
        align-items: center;
        color: #fff;
        float: left;
        margin-left: 20px;
        cursor: pointer;
        &:hover {
          color: $nav-hover-color;
        }
        button {
          width: 180px;
          height: 39px;
          color: #fff;
          background-color: $btn-bg-color;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          &:hover {
            background-color: $btn-hover-color;
          }
          &:active {
            background-color: $btn-bg-color;
          }
        }
        a {
            color: #fff;
            text-decoration: none;
        }
      }
    }
  }
  .van-popup-main {
    padding: 40px 20px;
    height: 91%;
    background-color: $header-bg-color;
    position: relative;
    .close {
      position: absolute;
      top: 14px;
      right: 8px;
    }
    ul {
      margin-top: 20px;
      li {
        margin: 30px 0;
        font-size: 22px;
        color: #c1c1c1;
        &:hover {
          color: $nav-hover-color;
        }
      }
    }
  }
}
</style>

<!-- 移动端样式 -->
<style lang="scss" scoped>
@media all and (max-width: 1000px) {
  .app-header {
    .header-right {
      ul {
        li {
          button {
            display: none;
          }
        }
      }
    }
  }
}
@media all and (max-width: 750px) {
  .app-header {
    width: 100vw;
    height: 70px;
    padding: 10px 0 10px 40px;
    .header-left {
      .menu {
        display: none;
      }
      .menu-iphone {
        display: block;
        margin-top: 10px;
      }
      .menu-iphone i:active,
      .menu-iphone i:hover {
        color: #a3a3a3;
      }
    }
  }
}
</style>