<template>
    <div>
        <h1>Portfolio</h1>

        <div class="projects">
            <div class="project-card">
                <img src="https://i.imgur.com/WZLnufW.png" class="img-fluid" alt="">
                <button>
                    <a target="_blank" href="https://music-fy.netlify.app/">See</a>
                </button>
            </div>

            <div class="project-card">
                <img src="https://i.ibb.co/tbfdXTP/newlogo.png" class="img-fluid" alt="">
                <button>
                    <a target="_blank"  href="https://appmoviess.herokuapp.com/">See</a>
                </button>
            </div>

            <div class="project-card">
                <img src="https://user-images.githubusercontent.com/42092212/100554007-8012cc00-329a-11eb-8425-6b1a1a99c3b4.png" class="img-fluid" alt="">
                <button>
                    <a target="_blank"  href="https://github.com/YordanDobrev97/UniBook">See</a>
                </button>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio'    
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