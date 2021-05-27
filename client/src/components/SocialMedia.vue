<template>
    <div class="container">
        <h2>Social Networks</h2>

        <div class="social-media">
            <a href="" target="_blank">Facebook</a>
            <a href="" target="_blank">Linkedin</a>
            <a href="" target="_blank">Github</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialMedia',
    components: {
    }
}
</script>

<style scoped>
    h2 {
        color: white;
    }

    .social-media {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }

    a {
        margin: 10px;
    }
</style>