<template>
  <div v-bind:class="{'container':true,'close':close}">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
export default {
  name: "menu-button",
  data: () => ({ close: false })
};
</script>

<style scoped>
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 3px;
  background-color: var(--accent);
  margin: 6px 0;
  transition: 0.4s;
}

.close .bar1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.close .bar2 {
  opacity: 0;
}

.close .bar3 {
  transform: rotate(45deg) translate(-6px, -8px);
}
</style> 
