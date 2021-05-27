<template>
    <div class="container">
        <img class="post-image" src="https://www.start-business-online.com/images/article_manager_uploads/blog.jpg"/>
        <h2 class="post-title">Title</h2>
        <button class="read-more">Read more</button>
    </div>
</template>

<script>
export default {
    name: 'Post'
}
</script>

<style scoped>
    .container {
        margin: 8px 5px;
    }

    .post-image {
        width: 140px;
        height: 120px;
    }

    .read-more {
        background: #F8C245;
        color: white;
        margin: 20px;
        padding: 10px;
        border-radius: 14px;
    }
</style>