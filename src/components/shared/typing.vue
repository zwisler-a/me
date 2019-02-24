<template>
  <span>{{display}}{{cursor}}</span>
</template>

<script>
export default {
  name: "typing",
  props: ["text"],
  data: () => ({
    display: "",
    cursor: "_"
  }),
  created: function() {
    const chars = this.$props.text.split("");
    chars.forEach((letter, i) => {
      setTimeout(() => {
        this.$data.display += letter;
      }, 50 * i);
    });
    setTimeout(() => {
      this.$data.cursor = ".";
    }, (chars.length + 3) * 50);
  }
};
</script>

<style scoped>
</style> 
