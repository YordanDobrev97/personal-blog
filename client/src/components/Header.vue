<template>
    <header>
        <h1 class="title-header">Blog with Vue.js</h1>
        <img class="avatar" src="https://vuejs.org/images/logo.png"/>
        <p>Hello, I am Yordan 22 year old. I am Full-Stack Web Developper.</p>
        <hr />
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header {
        background-color: rgb(7, 57, 165);
    }

    .title-header {
        color: orange;
    }

    h1, p {
        text-align: center;
        color: white;
        font-family: Verdana, sans-serif;
    }

    .avatar {
        width: 180px;
        height: 150px;
        border-radius: 50%;
    }
</style>