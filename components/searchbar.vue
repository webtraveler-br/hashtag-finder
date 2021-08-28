<template>
  <v-row :justify="firstTime ? 'center' : 'start'" no-gutters>
    <v-col cols="10" sm="8" md="6">
      <v-text-field
        hide-details
        v-model="search"
        dense
        rounded
        outlined
        :prepend-inner-icon="firstTime ? 'mdi-magnify' : null"
        :append-icon="firstTime ? null : 'mdi-magnify'"
        @keyup.enter="submit"
      ></v-text-field>
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
  }),

  watch: {},
  created() {},
  methods: {
    ...mapActions({
      tweetsInsert: 'tweets/insert',
    }),

    submit() {
      this.$axios
        .post('api/search', { hashtag: this.search })
        .then((value) => {
          this.tweetsInsert(value)
          this.$router.push('/tweets')
        })
        .catch((value) => {
          this.$toast.error(value, {
            duration: 2500,
          })
        })
    },
  },
}
</script>
