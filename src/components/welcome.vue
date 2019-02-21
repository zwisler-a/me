<template>
  <section id="welcome-section">
    <span id="greeting">Hi There</span>
  </section>
</template>

<script>
export default {
  name: "welcome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome-section {
  padding-top: 64px;
  height: calc(100vh - 64px);
  position: relative;
}
#greeting {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
}
</style> 
