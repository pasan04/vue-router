<template>
  <router-view></router-view>
</template>
<script>

export default {
  name: 'App',
  data(){
    return{
      teams:[
        { id: 'T1', name: 'Quality Assurance Engineers' },
        { id: 'T2', name: 'Software Engineers' },
        { id: 'T3', name: 'Techanical Leads' },
      ]
    };
  },
  provide(){
    return{
      teams: this.teams
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
