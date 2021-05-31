<template>
    <div class="tech-stack-container">
        <h3 class="skills">Skills</h3>

        <div v-if="technologies.length > 0" class="technologies">
            <div class="tech" v-for="item in technologies" :key="item._id">
                <img v-bind:src="item.image" />
                <h4>React.js, Vue.js</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TechStack",
    mounted() {
        fetch("http://localhost:5000/skills").then(r => r.json())
        .then(data => {
            this.technologies = data;
        })
    },
    data() {
        return {
            technologies: []
        }
    }
}
</script>

<style scoped>
    .skills {
        color: orange;
        margin-left: 22%;
        text-transform: uppercase;
    }

    .technologies {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-left: 20%;
    }

    .tech {
        margin: 20px 10px 10px 40px;
    }

    .technologies img {
        width: 140px;
        height: 80px;
    }
</style>