<template>
  <header id="navigation-header">
    <div id="navigation">
      <a
        v-for="item of navItems"
        v-bind:key="item.ref"
        v-bind:active="active === item"
        v-on:click="navigateTo(item)"
      >{{item.name}}</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data: function() {
    return {
      navItems: [
        { name: "Welcome", ref: "#welcome-section" },
        { name: "Test", ref: "#skills" }
      ],
      active: null
    };
  },
  methods: {
    navigateTo: function(navItem) {
      const el = document.querySelector(navItem.ref);
      this.$data.active = navItem;
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  },
  created: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navigation-header {
  height: 64px;
  top: 0px;
  left: 0px;
  background: var(--background);
  position: fixed;
  width: 100%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}
#navigation {
  height: 100%;
  padding: 0 16px;
  max-width: 1280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#navigation a {
  padding: 8px 16px;
  cursor: pointer;
  margin: 0 8px;
}
#navigation a[active] {
  color: var(--accent);
  border-bottom: solid 1px var(--accent);
}
</style>
