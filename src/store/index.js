import Vuex from 'vuex'
import Vue from 'vue'
import { initialState, actions, mutations } from './store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: initialState,
  actions,
  mutations
})
