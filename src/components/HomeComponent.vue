<template>
  <div class="hello">
    <h1>HOME</h1>
    <p>This is home page.</p>
    <button @click="confirmInput" style="height: 60px; width:120px; color: brown;">Change Route</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  methods:{
    confirmInput(){
      this.$router.push("/about");
    }
  }
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
</style>
