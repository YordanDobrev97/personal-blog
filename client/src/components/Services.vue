<template>
    <div class="service-container">
        <h1>Services</h1>

        <div v-if="services.length > 0" class="services">
            <div class="service-card" v-for="service in services" :key="service._id" >
                <img class="service-image" :src="service.image"/>
                <h2>{{service.type}}</h2>
                <p>{{service.description}}</p>
            </div>             
        </div>
    </div>
</template>

<script>
export default {
    name: "Services",
    mounted() {
        fetch("http://localhost:5000/services").then(r => r.json())
        .then(data => {
            this.services = data;
        })
    },
    data() {
        return {
            services: []
        }
    }  
}
</script>

<style scoped>
    .services {
        display: flex;
        margin-left: 25%;
    }

    h2 {
        text-align: center;
    }

    .service-image {
        width: 80px;
        height: 70px;
        border-radius: 50%;
    }

    .service-card {
        margin: 150px 20px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
    }

    .service-card p {
        max-width: 200px;
    }
</style>