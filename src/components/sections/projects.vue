<template>
  <section>
    
    <h1 class="header">More Projects</h1>
    <div id="github">
      <div class="project" v-for="project of projects" v-bind:key="project.id">
        <span class="header">
          <h2>{{project.name}}</h2>
          <a v-bind:aria-label="'Project - ' + project.name" v-bind:href="project.html_url">
            <github-icon/>
          </a>
        </span>
        <p class="description">{{project.description}}</p>
        <aside>{{project.language}}</aside>
      </div>
    </div>
  </section>
</template>

<script>
import githubIcon from "../shared/github-icon.vue";
import { fadeIntoView } from "../shared/fadeIntoView-mixin.js";

export default {
  name: "projects",
  mixins: [fadeIntoView],
  data: () => ({
    projects: []
  }),
  components: {
    githubIcon
  },
  created: async function() {
    this.$data.projects = await fetch(
      "https://api.github.com/users/zwisler-a/repos?type=owner"
    ).then(res => res.json());
  }
};
</script>

<style scoped>
#github {
  display: flex;
  flex-wrap: wrap;
}
#github .header {
  display: flex;
  justify-content: space-between;
}
#github .header svg {
  height: 25px;
  width: 25px;
}
#github .project aside {
  font-family: monospace;
}
#github .project {
  flex: 1 1 360px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 8px;
  background: var(--background-light);
}
#github .project .description {
  flex: 1 1 auto;
}
#github .project h2 {
  margin: 0;
}
</style> 
