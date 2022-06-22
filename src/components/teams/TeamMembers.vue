<template>
  <section v-if="members.length>0">
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [
        // { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        // { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      ],
    };
  },

  // created(){
  //   console.log(this.$route.query);
  //   if(this.$route){
  //       const teamId= this.$route.params.teamId;
  //       if(teamId){
  //          this.members =  this.$store.getters.teamMembers(teamId);
  //       } else{
  //         this.members=[];
  //     }
  //      } else{
  //       this.members=[];
  //      }
    
  // },

  //   beforeRouteUpdate(to,_2,next){
  //       console.log('Before route update..');
  //       const teamId= to.params.teamId;
  //       if(teamId){
  //          this.members =  this.$store.getters.teamMembers(teamId);
  //          next();
  //       } 
  // },

  watch:{
    $route(newRoute){
       if(newRoute){
        const teamId= newRoute.params.teamId;
        if(teamId){
           this.members =  this.$store.getters.teamMembers(teamId);
        } else{
          this.members=[];
      }
       } else{
        this.members=[];
       }
   
    }
  },
  methods:{
    back(){
      this.$router.back();
    },
   
   
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>