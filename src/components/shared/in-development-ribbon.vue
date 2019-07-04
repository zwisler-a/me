<template>
  <div class="ribbon">
    <span>In development</span>
  </div>
</template>

<script>
export default {
  name: "in-dev-ribbon"
};
</script>

<style scoped>
.ribbon {
  padding: 16px 126px;
  z-index: 50000;
  position: fixed;
  top: 0px;
  left: 0px;
  transform: rotate(-45deg) translate(-120px, -20px);
  background: red;
  color: white;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
}
.ribbon span {
  font-weight: bold;
  font-size: 1.2rem;
}
</style> 
