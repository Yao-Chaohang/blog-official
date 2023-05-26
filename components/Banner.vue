<template>
    <div class="banner">
        <div class="banner-main">
            <h2 class="animate__animated animate__pulse">欢迎大家一起和我来学习前端开发方向的技术知识，在关于页面有作者的联系方式，喜欢前端的同学可以联系我，一起学习，共同进步</h2>
            <span class="describe">博客内容主要开始以前端开发方向的为主，可能也会涉及一些服务端和开发工具类的相关内容，文章内容部分来源于网络，如有侵权，请联系作者删除</span>
            <button>开启学习之旅！</button>
            <span class="hint">拥有60+年的前端开发经验</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 24px;
    background-image: url("@/assets/image/banner.png");
    background-size: cover;
    .banner-main {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        h2 {
            width: 80%;
            margin: 0 auto;
            color: #FFFFFF;
            font-size: 32px;
            margin-bottom: 48px;
            line-height: 50px;
        }
        .describe,
        .hint {
            color: #d7d7d7;
        }
        .describe {
            margin: 0 auto 58px auto;
            width: 70%;
            display: block;
            font-size: 18px;
            line-height: 30px;
        }
        button {
            width: 260px;
            height: 60px;
            border: none;
            background-color: $btn-bg-color;
            margin: 0 auto 48px auto;
            color: #fff;
            border-radius: 8px;
            &:hover {
                background-color: $btn-hover-color;
            }
            &:active {
                background-color: $btn-bg-color;
            }
        }
    }
}
</style>

<!-- 移动端样式 -->
<style lang="scss" scoped>
@media all and (max-width: 750px) {
    .banner {
        padding: 50px 0 20px 0;
        height: auto;
        .banner-main {
            padding: 0;
            h2 {
                width: 100%;
                font-size: 24px;
                margin-bottom: 28px;
            }
            .describe {
                width: 100%;
                font-size: 17px;
                margin: 0 auto 38px auto;
            }
            button {
                margin: 0 auto 28px auto;
                width: 200px;
                height: 40px;
                border-radius: 6px;
            }
        }
    }
}
</style>