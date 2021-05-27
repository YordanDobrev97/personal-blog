<template>
    <div>
        <div class="about-container">
            <AboutDetails />
        </div>
        <div>
            <TechStack />
        </div>
    </div>
</template>

<script>
import AboutDetails from './AboutDetails'
import TechStack from './TechStack'

export default {
    name: 'About',
    components: {
        AboutDetails,
        TechStack
    } 
}
</script>

<style scoped>   
    .about-container {
        background-color: #f1efef;
        height: 300px;
    }
</style>