<template>
    <div class="logo">
        <img src="@/assets/image/logo.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.logo {
    width: 100px;
    height: 100%;
    img {
        width: 100%;
    }
}
</style>

<!-- 移动端样式 -->
<style lang="scss" scoped>
@media all and (max-width: 750px) {
    .logo {
        h1 {
            font-size: 22px;
        }
        .bg {
            width: 100px;
            height: 10px;
        }
    }
}
</style>