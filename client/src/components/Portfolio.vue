<template>
    <div>
        <h1>Portfolio</h1>

        <div v-if="projects.length > 0" class="projects">
            <div class="project-card" v-for="project in projects" :key="project._id">
                <img v-bind:src="project.image" class="img-fluid" alt="">
                <button>
                    <a target="_blank" :href="project.link">See</a>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Portfolio",
    mounted() {
        fetch("http://localhost:5000/projects").then(r => r.json())
        .then(data => {
            this.projects = data;
        })
    },
    data() {
        return {
            projects: []
        }
    },
}
</script>

<style scoped>
    .projects {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-left: 20%;
        margin-top: 3%;
    }

    .project-card {
        margin: 5px;
        display: flex;
        flex-direction: column;
        
    }

    .project-card img {
        width: 330px;
        height: 240px;
        margin: auto;
    }

    button {
        border-radius: 5%;
        height: 30px;
        width: 30%;
        margin-left: 35%;
        background-color: #2DB7F5;
    }

    button a {
        color: white;
    }
</style>