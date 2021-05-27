<template>
    <div class="service-container">
        <h1>Services</h1>

        <div class="services">
            <div class="service-card">
                <img class="service-image" src="https://assets.justinmind.com/wp-content/uploads/2020/10/what-is-responsive-design.png"/>
                <h2>Responsive Design</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores totam officiis nisi tenetur ullam fugiat culpa laborum eos aspernatur, consequuntur deserunt debitis, nemo dolorum. Voluptas natus illum sint unde vitae.</p>
            </div>

             <div class="service-card">
                 <img class="service-image" src="https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg"/>
                <h2>Web Development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores totam officiis nisi tenetur ullam fugiat culpa laborum eos aspernatur, consequuntur deserunt debitis, nemo dolorum. Voluptas natus illum sint unde vitae.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services'    
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