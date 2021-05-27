<template>
    <div class="details-container">
        <h3>About me</h3>
        <p>
            I am a web developer specialized in frontend and backend development. This is my blog, I love to share knowledge with other people.
        </p>
        <p>
            I am a self-taught programmer, I use my free time to learn new things
        </p>
    </div>
</template>

<script>
export default {
    name: 'AboutDetails'
}
</script>

<style scoped>
    .details-container {
        font-size: 22px;
    }

    h3 {
        margin: 0 0 0 20%;
        padding: 0;
        text-align: center;
    }

    p {
        margin-left: 35%;
        max-width: 700px;
    }
</style>