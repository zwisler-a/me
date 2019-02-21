<template>
  <div id="app">
    <main>
      <welcome/>
      <skills/>
    </main>
    <navigation/>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
import welcome from "./components/welcome.vue";
import skills from "./components/skills.vue";

export default {
  name: "app",
  components: {
    navigation,
    welcome,
    skills
  }
};
</script>

<style>
#app section {
  height: 100vh;
}
#app main {
  margin: auto;
  max-width: 1280px;
}
html,
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  --background: #1e2129;
  --accent: #40c4ff;
  --font: rgb(214, 214, 214);

  color: var(--font);
  background: var(--background);
}
</style>
