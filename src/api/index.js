import Vue from 'vue'
const baseUrl = 'http://baobab.kaiyanapp.com/api/v1'

export default {
  getHomeFeed: (cb, errHandle) => {
    const path = baseUrl + '/feed'
    Vue.http.get(path)
      .then(r => {
        console.log(r.data)
        cb(r.data)
      })
      .catch(err => {
        console.log('fetch ' + path + ' data failed...', err)
        errHandle || errHandle(err)
      })
  }
}
