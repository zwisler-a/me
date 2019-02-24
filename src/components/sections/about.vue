<template>
  <section id="about" class="hidden" ref="wrapper">
    <div id="about-wrapper">
      <div style="flex: 250px 1 1;">
        <h1 class="header">{{text.about.title}}</h1>
        <p>{{text.about.aboutFirst}}</p>
        <p>{{text.about.aboutSecond}}</p>
        <div id="techs">
          <ul>
            <li v-for="tech of text.about.aboutTechs1" v-bind:key="tech">{{tech}}</li>
          </ul>
          <ul>
            <li v-for="tech of text.about.aboutTechs2" v-bind:key="tech">{{tech}}</li>
          </ul>
        </div>
      </div>
      <div style="flex: 250px 1 1;margin-top:64px">
        <div style="width:300px; height:300px; background:white; margin:auto;"></div>
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
#about-wrapper {
  display: flex;
  flex-wrap: wrap;
}
#techs {
  display: flex;
}
#techs ul li {
  font-family: monospace;
}
#techs ul {
  flex: 1 1 auto;
}
</style> 
