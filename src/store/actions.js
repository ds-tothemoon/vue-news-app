import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem } from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then( response => {
        console.log(response);
        context.commit('SET_NEWS', response.data);
      })
      .catch(err => {
        console.log(err);
      })
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(err => {
        console.log(err);
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(err => {
        console.log(err);
      })
  },
  FETCH_USER({ commit }, username) {
    fetchUserInfo(username)
      .then(({data}) =>{
        commit('SET_USER', data);
       })
      .catch(err => {
        console.log(err);
      })
  },
  FETCH_ITEM({ commit }, id) {
    fetchItem(id)
      .then(({data}) =>{
        commit('SET_ITEM', data);
      })
      .catch(err => {
        console.log(err);
      })
  }
}