<template>
    <div class="blog-container">
        <div class="post-container">
            <Post />
            <Post />
            <Post />

            <Post />
            <Post />
            <Post />
        </div>
    </div>
</template>

<script>
import Post from './Post'

export default {
    name: 'Blog',
    components: {
        Post
    }
}
</script>

<style scoped>
    .post-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-left: 37%;
        width: 40%;
       
    }
</style>