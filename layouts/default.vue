<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer color="#f2f2f2" id="footer" app>
      <span>Brasil</span>
      <span id="google-phrase">Any similarity is mere coincidence.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
#footer {
  border: 1px solid #dadce0;
  color: rgba(0, 0, 0, 0.54);
}
#google-phrase {
  margin-left: auto;
  color: rgba(0, 0, 0, 0.562);
  font-size: 0.9rem;
}
</style>
