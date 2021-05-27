<template>
    <aside class="aside">
        <Header />
        <SocialMedia />
        <Navigation />
    </aside>
</template>

<script>
import Header from './Header'
import SocialMedia from './SocialMedia'
import Navigation from './Navigation'

export default {
    name: 'Aside',
    components: {
        Header,
        SocialMedia,
        Navigation
    }
}
</script>

<style scoped>
    .aside {
        float: left;
        background-color: #55B689;
        height: 100%;
        width: 300px;
        position: absolute;
        margin: 0px !important;
        padding: 0px !important;
    }

    @media only screen and (max-width: 600px) {
        .aside {
            width: 100%;
        }
    }
</style>