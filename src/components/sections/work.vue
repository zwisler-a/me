<template>
  <section id="work">
    <h1 class="header">{{text.experience.title}}</h1>
    <div id="wrapper">
      <div id="tabs">
        <div
          class="tab"
          v-for="company of text.experience.companies"
          v-bind:key="company.name"
          v-bind:active="company === selected"
          @click="select(company)"
        >{{company.name}}</div>
      </div>
      <div v-if="selected" id="details">
        <h1>
          {{selected.title}}
          <a>@ {{selected.fullName}}</a>
        </h1>
        <h4>{{selected.fromTo}}</h4>
        <p>{{selected.desc}}</p>
        <ul id="techs">
          <li v-for="bullet of selected.techs" v-bind:key="bullet">{{bullet}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { fadeIntoView } from "../shared/fadeIntoView-mixin";
import text from "../../text.js";
export default {
  name: "work",
  mixins: [fadeIntoView],
  data: () => ({
    selected: null,
    text
  }),
  methods: {
    select: function(company) {
      this.$data.selected = company;
    }
  },
  created: function() {
    this.$data.selected = this.$data.text.experience.companies[0];
  }
};
</script>

<style scoped>
#wrapper {
  display: flex;
}
#tabs {
  flex: 150px 0 0;
  display: flex;
  margin-right: 32px;
  flex-direction: column;
}

#tabs .tab[active] {
  background: var(--background-light);
  opacity: 1;
}
#tabs .tab[active]::before {
  background: var(--accent);
}
#tabs .tab::before {
  content: "";
  left: 0;
  display: block;
  position: absolute;
  width: 4px;
  background: var(--background-light);
  height: 100%;
}
#tabs .tab {
  position: relative;
  padding: 16px;
  cursor: pointer;
  opacity: 0.7;
  display: flex;
  align-items: center;
  transition: all 0.2s;
}
#details h1 {
  margin-bottom: 0;
}
#details ul {
  padding: 0 0 0 16px;
}
#details li {
  margin: 16px 0;
  padding-right: 32px;
}
#details h4 {
  margin: 0 0 32px 0;
  opacity: 0.7;
}
#techs {
  font-family: monospace;
  columns: 2;
}

@media only screen and (max-width: 768px) {
  #tabs {
    flex-direction: row;
    flex: 1 1 auto;
    overflow: scroll;
    justify-content: center;
  }
  #tabs .tab::before {
    bottom: 0;
    width: 100%;
    height: 2px;
  }
  #wrapper {
    flex-direction: column;
  }
}
</style> 
