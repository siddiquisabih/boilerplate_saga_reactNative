import axios from 'axios';
 import TokenStorage from "./tokenStorage"

import axiosInstance from "./axiosInstance"







export default  () => {
console.log('yai kaisy chala')
alert("chala")

axiosInstance.interceptors.response.use( (response) => {
      // Return a successful response back to the calling service
alert("chala")

      console.log(response)
      return response;
    }, (error) => {
        console.log(error)
      // Return any error which is not due to authentication back to the calling service
      if (error.response.status !== 401) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
  
      // Logout user if token refresh didn't work or user is disabled
      if (error.config.url == '/api/token/refresh' || error.response.message == 'Account is disabled.') {
        
        TokenStorage.clear();
        router.push({ name: 'root' });
  
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
  
      // Try request again with new token
      return TokenStorage.getNewToken()
        .then((token) => {
  
          // New request with new token
          const config = error.config;
          config.headers['Authorization'] = `Bearer ${token}`;
  
          return new Promise((resolve, reject) => {
            axios.request(config).then(response => {
              resolve(response);
            }).catch((error) => {
              reject(error);
            })
          });
  
        })
        .catch((error) => {
            Promise.reject(error);
        });
    });
  }


















    // alert("chala")
    // var newToken = '';
    // const axiosInstance = axios.create();
    // axiosInstance.interceptors.request.use(
    //     async request => {
    //         const { token } = store;

    //         token = newToken !== '' ? newToken : token;
    //         if (!request.headers.Authorization && token && token.access_token) {
    //             request.headers.Authorization = `${token.token_type} ${
    //                 token.access_token
    //                 }`;
    //         }
    //         if (!request.headers['Content-Type']) {
    //             request.headers['Content-Type'] = 'application/json';
    //         }
    //         return request;
    //     },
    //     error => console.error(error),
    // );

    // axiosInstance.interceptors.response.use(
    //     response => response,
    //     error => {
    //         // store.dispatch(LoadingActions.clear());
    //         const errorRes = error.response;
    //         if (errorRes) {
    //             if (errorRes.headers._abperrorformat && errorRes.status === 401) {
    //                 //store.dispatch(PersistentStorageActions.setToken({}));
    //                 alert('token');
    //             }

    //             showError({ error: errorRes.data.error || {}, status: errorRes.status });
    //         } else {
    //             alert('An unexpected error has occurred');
    //         }

    //         return Promise.reject(error);
    //     },
    // )





    // function showError({ error = {}, status }) {
    //     let message = '';
    //     let title = 'DefaultErrorMessage';

    //     if (typeof error === 'string') {
    //         message = error;
    //     } else if (error.details) {
    //         message = error.details;
    //         title = error.message;
    //     } else if (error.message) {
    //         message = error.message;
    //     } else {
    //         switch (status) {
    //             case 401:
    //                 title = 'AbpAccount::DefaultErrorMessage401';
    //                 message = 'AbpAccount::DefaultErrorMessage401Detail';
    //                 break;
    //             case 403:
    //                 title = 'AbpAccount::DefaultErrorMessage403';
    //                 message = 'AbpAccount::DefaultErrorMessage403Detail';
    //                 break;
    //             case 404:
    //                 title = 'AbpAccount::DefaultErrorMessage404';
    //                 message = 'AbpAccount::DefaultErrorMessage404Detail';
    //                 break;
    //             case 500:
    //                 title = 'AbpAccount::500Message';
    //                 message = 'AbpAccount::InternalServerErrorMessage';
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    //     alert(title + message);
    // }
 
// export default axiosInstance