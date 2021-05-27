<template>
    <div class="contact-container">
        <h1>Contact</h1>

        <form class="contact-form">
            <div class="contact-row">
                <input type="text" placeholder="Title" />
            </div>

            <div class="contact-row">
                <input type="text" placeholder="Your Email" />
            </div>

            <div class="contact-row">
                <input type="text" placeholder="Your Message" />
            </div>

            <div class="contact-row">
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
    .contact-form {
        width: 50%;
        max-height: 60%;
        background-color:#3B459E;
        margin-left: 30%;
        margin-top: 5%;
        border: 3px solid #0F95D7;
        padding: 40px;
    }

    input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: none;
        border-bottom: 2px solid black;
    }

    input[type=submit] {
        background-color: #FFAD6A;
        color: white;
        margin: 10px;
        padding: 15px 30px;
    }
</style>