<template>
  <section id="projects">
    <h1 class="header">Projects</h1>
    <div
      v-for="(feature, index) of text.projects.features"
      v-bind:key="feature.name"
      v-bind:class="{left:index%2}"
      class="feature"
    >
      <div class="preview">
        <img v-bind:src="feature.image" alt="preview">
      </div>
      <div class="info">
        <h4 class="featured">{{text.projects.featured}}</h4>
        <h2 class="title">{{feature.name}}</h2>
        <p class="desc">{{feature.desc}}</p>
        <ul class="techs" v-for="tech of feature.techs" v-bind:key="tech">
          <li>{{tech}}</li>
        </ul>
        <a class="github-link" aria-label="github-link" v-bind:href="feature.link">
          <github-icon/>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { fadeIntoView } from "../shared/fadeIntoView-mixin.js";
import text from "../../text.js";
import githubIcon from "../shared/github-icon";

export default {
  name: "featured-projects",
  components: { githubIcon },
  data: () => ({ text }),
  mixins: [fadeIntoView]
};
</script>

<style scoped>
#projects .header {
  margin-bottom: 128px;
}
#projects {
  margin-bottom: 128px;
}
.feature {
  position: relative;
  margin: auto;
  max-width: 900px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.feature.left {
  flex-direction: row;
}
.left {
  text-align: right;
}
.left .preview {
  margin: 0 -50px 0 0;
}
.left .techs {
  justify-content: flex-end;
}
.left .techs li {
  padding: 0 0 0 16px;
}
.featured {
  color: var(--accent);
  margin: 0;
  font-size: 0.8rem;
}
.info {
  position: relative;
}

.title {
  margin: 0;
}
.preview {
  flex: 50% 1 0;
  height: 100%;
  max-height: 250px;
  margin-left: -50px;
  position: relative;
}
.preview img {
  width: 100%;
  height: 100%;
  max-height: 250px;
}
.preview:hover:before {
  opacity: 0;
}
.preview::before {
  transition: opacity 0.5s;
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  background: #40c3ffb0;
  position: absolute;
}
.github-link svg {
  width: 25px;
}
.desc {
  background: var(--background-light);
  padding: 32px;
}
.techs {
  list-style: none;
  padding: 0;
  display: flex;
  font-family: monospace;
  flex-wrap: wrap;
}
.techs li {
  padding: 0 16px 0 0;
}

@media only screen and (max-width: 768px) {
  .preview {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    z-index: 0;
  }
  .info {
    z-index: 1;
    padding: 32px;
    box-sizing: border-box;
  }
  .desc {
    background: none;
    padding: 0;
  }
  .preview::before {
    background: var(--background-light);
    opacity: 0.9;
  }
}
</style> 
