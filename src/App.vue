<template>
  <div id="app">
    <main>
      <welcome/>
      <about class="hidden"/>
      <work class="hidden"/>
      <featured-projects class="hidden"/>
      <projects class="hidden"/>
    </main>
    <navigation/>
    <networks/>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
import welcome from "./components/sections/welcome.vue";
import work from "./components/sections/work.vue";
import about from "./components/sections/about.vue";
import networks from "./components/networks.vue";
import projects from "./components/sections/projects.vue";
import featuredProjects from "./components/sections/featured-projects.vue";

export default {
  name: "app",
  components: {
    navigation,
    welcome,
    work,
    about,
    networks,
    projects,
    featuredProjects
  }
};
</script>

<style scoped>
#app main {
  margin: auto;
  max-width: 1280px;
  padding: 0 112px;
}
@media only screen and (max-width: 768px) {
  #app main {
    padding: 0 16px;
    overflow: hidden;
  }
}
</style>
