<template>
  <Loader />
  <nav>
    <router-link to="/">Все котики</router-link>
    <router-link to="/favorites">Любимые котики</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Loader from '@/components/Loader.vue'

export default defineComponent({
  name: 'App',
  components: {
    Loader
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

nav {
  width: 100vw;
  background: #2196F3;
  box-sizing: border-box;
  height: 64px;
  padding-left: 64px;
  text-align: left;
  a {
    font-family: 'Roboto';
    font-style: normal;
    height: 100%;
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.25px;
    color: rgba(255, 255, 255, 0.7);
    padding: 0 23px;
    text-decoration: none;
    &.router-link-exact-active {
      background: #1E88E5;
      color: #FFFFFF;
    }
  }
}

.all-cats-list, .favourite-cats-list {
  width: 1255px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 225px);
  grid-template-rows: repeat(3, 225px);
  grid-gap: 50px;
  margin: 50px auto;

}
</style>
