import axios from 'axios'
const baseUrl = 'http://baobab.kaiyanapp.com/api/v1'

const getHttp = (path, cb, errHandle) => {
  axios.get(path)
    .then(r => {
      console.log(r.data)
      cb(r.data)
    })
    .catch(err => {
      console.log('fetch ' + path + ' data failed...', err)
      errHandle && errHandle(err)
    })
}

export default {
  getHomeFeed: (cb, errHandle) => {
    const path = baseUrl + '/feed'
    getHttp(path, cb, errHandle)
  },
  getVideoDetail: (videoId, cb, errHandle) => {
    const path = `${baseUrl}/video/${videoId}`
    if (cb || errHandle) {
      getHttp(path, cb, errHandle)
    } else {
      return axios.get(path)
    }
  },
  getRelatedVideo: (videoId, cb, errHandle) => {
    const path = `${baseUrl}/video/related/${videoId}?num=10`
    if (cb || errHandle) {
      getHttp(path, cb, errHandle)
    } else {
      return axios.get(path)
    }
  },
  getVideoReply: (videoId, cb, errHandle) => {
    const path = `${baseUrl}/replies/video?id=${videoId}&num=5`
    if (cb || errHandle) {
      getHttp(path, cb, errHandle)
    } else {
      return axios.get(path)
    }
  },
  getVideoAll: (videoId, cb, errHandle) => {
    axios.all([this.a.getVideoDetail(videoId), this.a.getRelatedVideo(videoId), this.a.getVideoReply(videoId)])
      .then(r => {
        cb && cb(r)
      })
      .catch(err => {
        errHandle && errHandle(err)
      })
  }
}
