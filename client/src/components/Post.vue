<template>
  <div>
    <img class="post-image" :src="image" />
    <h2 class="post-title">{{ title }}</h2>
    <button class="read-more">Read more</button>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 20px;
}

.post-image {
  width: 140px;
  height: 120px;
}

.read-more {
  background: #f8c245;
  color: white;
  margin: 20px;
  padding: 10px;
  border-radius: 14px;
}
</style>