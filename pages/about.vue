<template>
    <div class="about">
        <h1>关于我们</h1>
        <h2>作者信息</h2>
        <ul>
            <li>姓名：姚超航</li>
            <li>性别：男</li>
            <li>年龄：23</li>
            <li>职业：前端开发工程师</li>
            <li>爱好：看电影、听音乐、骑行、写代码</li>
            <li>联系电话：19133965998</li>
            <li>个人邮箱：yaochaohang@163.com</li>
            <li>github：<a href="https://github.com/Yao-Chaohang" target="_blank">https://github.com/Yao-Chaohang</a></li>
            <li>照片：<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">查看照片</a></li>
        </ul>

        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">作者照片</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="@/assets/image/photograph.jpg" alt="作者照片" style="width: 100%;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: '关于作者'
    })
</script>

<style lang="scss" scoped>
.about {
    width: 80%;
    margin: 0 auto 90px auto;
    box-sizing: border-box;
    min-height: 500px;
    h1 {
        margin-top: 30px;
        font-size: 38px;
        text-align: center;
        font-weight: bold;
    }
    h2 {
        margin-top: 20px;
        padding: 30px 0;
        font-size: 34px;
    }
    ul,
    li,
    p {
        line-height: 30px;
        font-size: 19px;
    }
}
</style>