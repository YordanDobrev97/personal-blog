<template>
    <header>
        <h1>Yordan Dobrev</h1>
        <img class="avatar" src="https://www.pngitem.com/pimgs/m/681-6819175_person-on-computer-logo-clipart-png-download-programmer.png"/>
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