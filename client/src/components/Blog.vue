<template>
  <div>
    <ul>
      <li v-for="post in posts.slice(0, 6)" :key="post._id">
        <Post :image="post.image" :title="post.title" />
      </li>
    </ul>

    <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "Blog",
  mounted() {
    fetch("http://localhost:5000/posts")
      .then((r) => r.json())
      .then((data) => {
        this.posts = data;
      });
  },
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style scoped>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0px 30%;
  width: 40%;
}

li {
  list-style-type: none;
}
</style>