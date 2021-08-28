export const state = () => ({
  tweets: [],
})

export const getters = {
  getTweets(state) {
    return state.tweets
  },
}

export const mutations = {
  setTweets(state, tweetsList) {
    state.tweets = tweetsList
  },
}

export const actions = {
  insert(context, tweetsList) {
    context.commit('setTweets', tweetsList)
  },
}
