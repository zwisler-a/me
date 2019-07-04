<template>
  <div id="contact-section">
    <a>
      <github-icon />
      <span>zwisler-a</span>
    </a>
    <a>
      <linkedin-icon />
      <span>Alexander Zwisler</span>
    </a>
    <a>
      <email-icon />
      <span>contact@zwisler.dev</span>
    </a>
  </div>
</template>
 
<script>
import text from "../../text.js";
import githubIcon from "./../shared/github-icon.vue";
import linkedinIcon from "./../shared/linkedin-icon.vue";
import emailIcon from "./../shared/email-icon.vue";
export default {
  name: "contact",
  data: () => ({
    text
  }),
  components: { githubIcon, linkedinIcon, emailIcon }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact-section {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
#contact-section a:hover {
  color: var(--accent);
}
#contact-section a {
  display: flex;
  color: var(--font);
  align-items: center;
  height: 25px;
}
#contact-section a span {
  margin-left: 10px;
}
svg {
  width: 15px;
  fill: var(--font);
}
</style> 
