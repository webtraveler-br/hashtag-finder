<template>
  <v-row :justify="firstTime ? 'center' : 'start'" no-gutters>
    <v-col cols="10" sm="8" md="6" id="search-box">
      <v-text-field
        hide-details
        v-model="search"
        dense
        rounded
        outlined
        :prepend-inner-icon="firstTime ? 'mdi-magnify' : null"
        :append-icon="firstTime ? null : 'mdi-magnify'"
        @keyup.enter="submit"
        @focus="displayOn"
        @blur="displayOff"
      ></v-text-field>
      <div id="history" :style="display ? 'display:inherit' : 'display:none'">
        <button
          class="history-item"
          v-for="hashtag in history.data"
          :key="hashtag.hashtag"
          @click="histSearch(hashtag.hashtag)"
        >
          <v-icon> mdi-magnify</v-icon>
          <span style="margin-left: 0.2rem">{{ hashtag.hashtag }}</span>
        </button>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'dashboard',
  props: {
    firstTime: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    search: '',
    history: [],
    display: false,
  }),

  async fetch() {
    this.history = await this.$axios.get('api/search')
  },

  created() {
    this.search = this.$route.query.hashtag
  },
  methods: {
    ...mapActions({
      tweetsInsert: 'tweets/insert',
    }),
    displayOff() {
      setTimeout(() => (this.display = false), 150)
    },
    displayOn() {
      setTimeout(() => (this.display = true), 150)
    },
    histSearch(hashtag) {
      this.search = hashtag
      this.submit()
    },
    submit() {
      this.$axios
        .post('api/search', { hashtag: this.search })
        .then((value) => {
          this.tweetsInsert(value)
          this.$router.push({
            path: '/tweets',
            query: { hashtag: this.search },
          })
        })
        .catch((error) => {
          for (const item in error.response.data.errors) {
            this.$toast.error(error.response.data.errors[item], {
              duration: 2500,
            })
          }
        })
    },
  },
}
</script>

<style scoped>
#search-box {
  position: relative;
}
#history {
  position: absolute;
  width: 100%;
  height: 400px;
}
.history-item {
  width: 100%;
  padding: 0.3rem 1rem;
  border: 1px solid #e0e0e0;
  background-color: white;
  word-wrap: break-word;
  text-align: left;
}
.history-item:first-child {
  border-top: none;
}
.history-item:hover {
  background-color: #eee;
}
</style>
