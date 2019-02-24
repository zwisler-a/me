<template>
  <header id="navigation-header">
    <div ref="nav" id="navigation">
      <a aria-label="Home" href="/" class="logo"></a>
      <span id="sidenav-button" @click="toggleSidenav()">
        <menu-button ref="menu"/>
      </span>

      <div @click="toggleSidenav()" id="backdrop"></div>
      <nav id="nav">
        <div
          class="nav-item"
          v-for="item of navItems"
          v-bind:key="item.ref"
          v-bind:hidden="item.name===''"
          v-bind:active="item.active"
          v-on:click="navigateTo(item)"
        >
          <a>{{item.name}}</a>
        </div>
        <div id="resume">
          <a>Resume</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import menuButton from "./shared/menu-button.vue";
import { setTimeout } from "timers";
export default {
  name: "navigation",
  components: { menuButton },
  data: function() {
    return {
      navItems: [
        { name: "", ref: "#welcome-section", url: "/" },
        { name: "About", ref: "#about", url: "/about" },
        { name: "Experience", ref: "#work", url: "/experience" },
        { name: "Projects", ref: "#projects", url: "/projects" }
      ]
    };
  },
  methods: {
    navigateTo: function(navItem) {
      const el = document.querySelector(navItem.ref);
      window.scrollTo({
        top: el.getBoundingClientRect().top - 84 + window.scrollY,
        behavior: "smooth"
      });
      history.pushState(navItem, "", navItem.url);
    },
    isElementInViewport: function(navItem) {
      const el = document.querySelector(navItem.ref);
      if (!el) return false;
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    },
    toggleSidenav: function() {
      this.$refs["nav"].classList.toggle("open");
      this.$refs["menu"].$data.close = !this.$refs["menu"].$data.close;
    }
  },
  mounted: function() {
    window.addEventListener("scroll", () => {
      this.navItems.forEach(item => {
        if (this.isElementInViewport(item)) {
          if (!item.active) history.pushState({}, "", item.url);
          item.active = true;
        } else {
          item.active = false;
        }
      });
      this.$forceUpdate();
    });
    setTimeout(() => {
      this.$data.navItems.forEach(item => {
        if (item.url === location.pathname) {
          this.navigateTo(item);
        }
      });
    }, 800);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navigation-header {
  height: 64px;
  top: 0px;
  z-index: 5000;
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
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#navigation .nav-item a {
  color: var(--font);
}
#navigation .nav-item {
  user-select: none;
  padding: 8px 24px;
  cursor: pointer;
}
#navigation .nav-item[active] {
  color: var(--accent);
  border-bottom: solid 1px var(--accent);
}
#resume {
  border: solid 1px var(--accent);
  color: var(--accent);
  border-radius: 1px;
  margin: 0 16px;
  padding: 8px;
  cursor: pointer;
}
#nav {
  display: flex;
  flex-direction: row;
}
.open #nav {
  width: 250px;
}
#sidenav-button {
  display: none;
}
#backdrop {
  display: none;
}

@media only screen and (max-width: 768px) {
  #nav {
    flex-direction: column;
    position: fixed;
    height: 100%;
    transition: width 0.2s ease-in-out;
    width: 0px;
    justify-content: center;
    right: 0px;
    border-left: solid 1px var(--accent);
    top: 0px;
    z-index: 5000;
    background: var(--background);
  }
  #sidenav-button {
    display: block;
    z-index: 5001;
  }
  .open #backdrop {
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background: #40c3ff28;
    z-index: 4999;
  }
  #resume {
    margin-top: 50px;
  }
  #navigation .nav-item[active] {
    border-bottom: none;
  }
}
</style>
