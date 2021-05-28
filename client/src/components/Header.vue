<template>
    <header>
        <h1 class="title-header">Vue Blog</h1>
        <img class="avatar" src="https://miro.medium.com/max/6416/1*7OCwu--TWqVluPMsZdzWKw.png"/>
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
        background-color: #55B689;
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