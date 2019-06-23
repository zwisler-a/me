<template>
  <section id="welcome-section">
    <div id="welcome">
      <span id="greeting">{{text.welcome.greeting}}</span>
      <h1 id="name">
        <typing v-bind:text="text.welcome.name"/>
      </h1>

      <h2 id="name-subtitle" class="fade-in">{{text.welcome.nameSubTitle}}</h2>
      <p class="fade-in">{{text.welcome.frontText}}</p>
      <acc-button class="fade-in" id="contact">
        <a aria-label="email" href="mailto:alexander@zwisler-online.de">{{text.welcome.contactMe}}</a>
      </acc-button>
    </div>
  </section>
</template>
 
<script>
import typing from "../shared/typing.vue";
import accButton from "../shared/accent-button.vue";
import text from "../../text.js";
export default {
  name: "welcome",
  data: () => ({
    text
  }),
  components: { typing, accButton }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0;
}
#welcome {
  margin: auto;
}
#greeting {
  color: var(--accent);
}
#name {
  font-size: 5rem;
  margin: 0;
}
#name-subtitle {
  margin: 0;
  font-size: 3.5rem;
  color: var(--font-dark);
}
#contact {
  padding: 16px 32px;
  user-select: none;
  margin-top: 16px;
  cursor: pointer;
}
@media only screen and (max-width: 768px) {
  #name {
    font-size: 3rem;
  }
  #name-subtitle {
    font-size: 2rem;
  }
}
</style> 
