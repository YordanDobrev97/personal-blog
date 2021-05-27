<template>
    <div class="tech-stack-container">
        <h3 class="skills">Skills</h3>

        <div class="technologies">
            <div class="tech">
                <img src="https://blog.clever-age.com/wp-content/uploads/sites/2/2018/11/logos-vue.js-react.js-FB.jpg" />
                <h4>React.js, Vue.js</h4>
            </div>

            <div class="tech">
                <img src="https://miro.medium.com/max/1051/1*q9myzo5Au8OfsaSrCodNmw.png" />
                <h4>Node & Express.js</h4>
            </div>

            <div class="tech">
                <img src="https://paydock.com/wp-content/uploads/2018/04/dotnet_round.png" />
                <h4>.NET</h4>
            </div>

            <div class="tech">
                <img src="https://www.iperiusbackup.net/wp-content/uploads/2016/05/1768.sql_logo.png" />
                <h4>SQL Server</h4>
            </div>

            <div class="tech">
                <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" />
                <h4>MongoDB</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TechStack'
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