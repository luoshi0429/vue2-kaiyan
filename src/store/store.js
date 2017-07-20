import * as types from './types'

export const initialState = {
  isLoading: false
}

export const actions = {
  changeLoading ({ commit }) {
    commit(types.CHANGELOADING)
  }
}

export const mutations = {
  [types.CHANGELOADING] (state) {
    state.isLoading = !state.isLoading
  }
}