import * as types from './types'
import api from '../api'

export const initialState = {
  isLoading: false,
  homeFeed: []
}

export const actions = {
  changeLoading ({ commit }) {
    commit(types.CHANGE_LOADING)
  },
  getHomeFeed ({ commit }) {
    commit(types.CHANGE_LOADING, true)
    api.getHomeFeed((response) => {
      commit(types.CHANGE_LOADING, false)
      commit(types.GET_HOME_FEED, response)
    }, () => {
      commit(types.CHANGE_LOADING, false)
    })
  }
}

export const mutations = {
  [types.CHANGE_LOADING] (state) {
    state.isLoading = !state.isLoading
  },
  [types.GET_HOME_FEED] (state, data) {
    const list = data.dailyList
    state.homeFeed = list.length ? data.dailyList[0].videoList : []
  }
}