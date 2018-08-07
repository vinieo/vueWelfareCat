import axios from 'axios';
import router from '@/router';

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'should be buildUrl' : 'should be devUrl';// TODO: need comfirm

//  http request 拦截器
axios.interceptors.request.use((config) => {
  // TODO:这里处理重复请求 取消或者做成队列
  console.log(config);
  return config;
}, err => Promise.reject(err));


// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === 2) {
      router.push({
        path: '/login',
        querry: { redirect: router.currentRoute.fullPath }, // 从哪个页面跳转
      });
    }
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      // 处理404
    }
    return Promise.reject(error);
  },
);


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then((response) => {
        resolve(response.data);
      }, (err) => {
        reject(err);
      });
  });
}

