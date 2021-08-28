<template>
  <div id="tweet-box">
    <p>
      <b>{{ name }}</b> <span>@{{ username }}</span> <b>.</b>
      {{ this.getDate(date) }}
    </p>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    getDate(date) {
      date = new Date(date)
      return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    },
  },
}
</script>

<style>
#tweet-box {
  border: 1px solid #e9e9e9;
  padding: 1rem;
}
</style>
