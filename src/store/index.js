import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    countries: [],
    companions: []
  },
  mutations: {
    COMPANIONS_STATE: (state, companions) => {
      state.companions = companions
    },
    COUNTRIES_STATE: (state, countries) => {
      state.countries = countries
    }
  },
  actions: {
    async getCompanions ({ commit }) {
      try {
        const companions = await axios('http://localhost:3001/companions', {
          method: 'GET'
        })
        commit('COMPANIONS_STATE', companions.data)
      } catch (e) {
        return e
      }
    },
    async getCountries ({ commit }) {
      try {
        const countries = await axios('http://localhost:3001/countries', {
          method: 'GET'
        })
        commit('COUNTRIES_STATE', countries.data)
      } catch (e) {
        return e
      }
    }
  },
  getters: {
    COMPANIONS (state) {
      return state.companions
    },
    COUNTRIES (state) {
      return state.countries
    }
  }
})
