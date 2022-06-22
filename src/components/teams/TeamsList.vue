<template>
  <div class='parent'>
    <div class="child">
    <ul>
      <teams-item
        v-for="team in teams"
        :key="team.id"
        :name="team.name"
        :member-count="team.members.length"
        :id="team.id"
      ></teams-item>
    </ul>
    </div>
    <div class="child" id="teamMembersDiv">
      <team-members></team-members>
    </div>
  </div>
</template>

<script>
import TeamsItem from './TeamsItem.vue';
import TeamMembers from './TeamMembers.vue';

export default {
  components: {
    TeamsItem,
    TeamMembers
  },
  computed:{
    teams(){
      return this.$store.getters.teams;
      
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
.parent {
  
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
}
.child {
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: middle;
  width:30%;
}
</style>