<template>
  <v-row align="center">
    <h1 :id="firstTime ? 'title' : 'title2'">
      #<i class="gblue">F</i><i class="gred">i</i><i class="gyellow">n</i
      ><i class="gblue">d</i><i class="gred">e</i><i class="ggreen">r</i>
    </h1>
  </v-row>
</template>

<script>
export default {
  props: {
    firstTime: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
i {
  font-style: normal;
}
#title {
  font-size: 5rem;
  letter-spacing: 0;
  margin: auto;
}
#title2 {
  font-size: 2.2rem;
}
.gblue {
  color: #0082f0;
}
.gred {
  color: #f73f2f;
}
.gyellow {
  color: #f7b700;
}
.ggreen {
  color: #00a549;
}
</style>
