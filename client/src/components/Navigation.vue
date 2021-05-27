<template>
    <nav>
        <ul>
            <li>
                <router-link class="link" to="/">About me</router-link>
            </li>
            <li>
                <router-link class="link" to="/portfolio">Portfolio</router-link>
            </li>
            <li>
                <router-link class="link" to="/services">Services</router-link>
            </li>
            <li>
                <router-link class="link" to="/blog">Blog</router-link>
            </li>
            <li>
                <router-link class="link" to="/contact">Contact</router-link>
            </li>

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
        margin: 0;
        padding: 0;
    }

    li {
        margin: 28px 10px;
        vertical-align: middle;
    }

    .link {
        color: white;
        text-decoration: none;
    }
</style>