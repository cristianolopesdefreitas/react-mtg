import axios from 'axios';

let loading = 0;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    if (!loading) {
        console.log('request loading');
        loading = loading + 1;
    }

    return config;
  }, function (error) {
    loading = loading - 1;

    if (!loading) {
        console.log('erro request loading');
    }

    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    loading = loading - 1;

    if (!loading) {
        console.log('response loading');
    }

    return response;
  }, function (error) {
    loading = loading - 1;

    if (!loading) {
        console.log('erro response loading');
    }

    return Promise.reject(error);
  });