<template>
    <nav>
        <ul>
            <li>About me</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </nav>    
</template>

<script>
export default {
    name: 'Navigation',
}
</script>

<style scoped>
    nav {
        text-align: center;
    }
    ul {
        list-style-type: none;
        margin: 8px;
        padding: 0;
    }

    li {
        margin: 8px;
        vertical-align: middle;
        color: white;
    }
</style>