<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
    <!-- <component :is="activePage"></component> -->
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>

import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    // TeamsList,
    // UsersList,
  },
  data() {
    return {
      activePage: 'teams-list',
      
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>