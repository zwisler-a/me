<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "acc-button"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: solid 1px var(--accent);
  color: var(--accent);
  background: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  border-radius: 1px;
  margin: 0 16px;
  padding: 8px;
  cursor: pointer;
  transition: background 0.1s;
}
button:hover {
  background: var(--accent-light);
}
</style> 
