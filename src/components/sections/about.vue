<template>
  <section id="about" class="hidden" ref="wrapper">
    <div id="about-wrapper">
      <div style="flex: 250px 1 1;">
        <h1 class="header">{{text.about.title}}</h1>
        <p>{{text.about.aboutFirst}}</p>
        <p>{{text.about.aboutSecond}}</p>
        <div id="about-techs">
          <ul>
            <li v-for="tech of text.about.aboutTechs1" v-bind:key="tech">{{tech}}</li>
          </ul>
          <ul>
            <li v-for="tech of text.about.aboutTechs2" v-bind:key="tech">{{tech}}</li>
          </ul>
        </div>
      </div>
      <div style="flex: 250px 1 1;margin-top:64px">
        <div id="portrait">
          <div class="overlay"></div>
          <img alt="portrait" src="assets/user.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fadeIntoView } from "../shared/fadeIntoView-mixin.js";
import text from "../../text.js";
export default {
  name: "about",
  data: () => ({ text }),
  mixins: [fadeIntoView]
};
</script>

<style scoped>
#portrait::after {
  content: "";
  display: block;
  position: relative;
  top: -25px;
  left: 25px;
  border: solid 2px var(--accent);
  height: 100%;
  z-index: 1;
  transition-duration: 0.3s;
  transition-property: top left;
}
#portrait:hover > .overlay {
  opacity: 0;
}
#portrait > .overlay {
  transition: opacity 0.3s;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background: var(--accent);
  opacity: 0.3;
}
#portrait > img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}
#portrait:hover::after {
  top: -10px;
  left: 10px;
}
#portrait {
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
}
#about-wrapper {
  display: flex;
  flex-wrap: wrap;
}
#about-techs {
  display: flex;
}
#about-techs ul li {
  font-family: monospace;
}
#about-techs ul {
  flex: 1 1 auto;
}
</style> 
