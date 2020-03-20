


import axios from "axios";

// axios.defaults.baseURL = '/api'

// 很强大  拦截器 
axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

import router from "@/router"


/**
 * element-ui loading动画
 */
// 加载动画
import {Loading} from 'element-ui'
let loadingCount = 0;
let loading;
const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.3)'
    });
};
const endLoading = () => {
    loading.close();
};
const showLoading = () => {
    if (loadingCount === 0) {
        startLoading();
    }
    loadingCount += 1;
};
const hideLoading = () => {
    if (loadingCount <= 0) {
        return;
    }
    loadingCount -= 1;
    if (loadingCount === 0) {
        endLoading();
    }
};

// 请求的拦截器 
axios.interceptors.request.use(function (config) {
    // ajax 请求发送之前 
    showLoading();
    return config;
  }, function (error) {
    // ajax 请求无法发送  
    hideLoading();
    return Promise.reject(error);
});

// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 
    hideLoading();


    return response;
}, function (error) {
    // 后台数据返回失败 
    hideLoading();

});
export default axios;