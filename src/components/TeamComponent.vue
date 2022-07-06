<template>
  <div class="hello">
    <h1>TEAM</h1>
    <p>This is used to show details of team members</p>
    <h2>{{selectedTeam}}</h2>
  </div>
</template>

<script>

export default {
  inject: ['teams'],
  props: ['id'],
  data(){
    return{
        selectedTeam: null,
    };
  },
  created(){
    const teamId = this.id;
    this.selectedTeam = this.teams.find( team=> team.id === teamId);
    console.log(this.$route.query);
  }
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
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