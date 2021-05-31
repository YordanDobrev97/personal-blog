<template>
    <div class="details-container">
        <h3>About me</h3>
        <p v-if="description">
            {{description}}
        </p>
    </div>
</template>

<script>
export default {
    name: "AboutDetails",
    mounted() {
        fetch("http://localhost:5000/aboutMe").then(r => r.json())
        .then(data => {
            this.description = data[0].description;
        })
    },

    data() {
        return {
            description: ""
        }
    }
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