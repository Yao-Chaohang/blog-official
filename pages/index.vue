<template>
    <div class="home">
        <Banner />
        <h2 class="subject-title">博客介绍</h2>
        <template v-for="(item, index) in showCardList" :key="item.title">
            <ShowCard :title="item.title" :img-url="item.imgUrl" :index="index + 1" />
        </template>
    </div>
</template>

<script setup>
    const showCardList = [
        {
            title: '网站主要分为五个模块：文章首页、归档、分类、标签、关于，在左侧栏目中也会有作者的社交平台账号以及网站的数据信息。以首页为主',
            imgUrl: '/show-card-image/1.jpg'
        },
        {
            title: '归档页面可以查看到网站整体文章的数据信息，内容在持续更新中...',
            imgUrl: '/show-card-image/2.jpg'
        },
        {
            title: '网站也对移动端页面做了简单的自适应，方便多端查看',
            imgUrl: '/show-card-image/3.jpg'
        }
    ]
</script>

<style lang="scss" scoped>
.home {
    .subject-title {
        font-size: 48px;
        text-align: center;
        margin: 60px 0;
    }
}
</style>