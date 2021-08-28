<template>
  <div>
    <nav id="search">
      <v-row align="center">
        <v-col cols="12" sm="2">
          <titleg id="logo" />
        </v-col>
        <v-col cols="12" sm="10">
          <searchbar />
        </v-col>
      </v-row>
    </nav>
    <section id="results">
      <tweet
        v-for="tweet in Tweets"
        :key="tweet.id"
        :name="tweet.name"
        :username="tweet.username"
        :date="tweet.created_at"
        :text="tweet.text"
      />
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.Tweets)
  },
  computed: {
    Tweets() {
      return this.$store.getters['tweets/getTweets'].data
    },
  },
}
</script>

<style scoped>
#search {
  border-bottom: 1px solid #e9e9e9;
  padding: 0.7rem 1rem;
}

@media (min-width: 576px) {
  #results {
    margin: auto;
    width: 50%;
  }
}
</style>
