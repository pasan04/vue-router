<template>
  <div class="hello">
    <h1>HOME</h1>
    <router-link to="/about"> My About component </router-link>
    <p>This is home page.</p>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

a:hover,
a:active,
a.router-link-a {
  color: #42b983;
  border-color: #42b983;
  background-color: blue;
}
</style>
