import { Toast } from 'native-base';
import I18next from 'I18next';
import { api } from '../services/ApiSauce';
import PersistentStorageActions from '../store/actions/PersistentStorageActions';
import LoadingActions from '../store/actions/LoadingActions';


export function initAPIInterceptor(store) {
  api.interceptors.request.use(
    async request => {
      const {
        persistentStorage: { token, language, tenant },
      } = store.getState();

      if (!request.headers.Authorization && token && token.access_token) {
        request.headers.Authorization = `${token.token_type} ${token.access_token}`;
      }

      if (!request.headers['Content-Type']) {
        request.headers['Content-Type'] = 'application/json';
      }

      if (!request.headers['Accept-Language'] && language) {
        request.headers['Accept-Language'] = language;
      }

      if (!request.headers.__tenant && tenant && tenant.tenantId) {
        request.headers.__tenant = tenant.tenantId;
      }

      return request;
    },
    error => console.error(error),
  );

  api.interceptors.response.use(
    response => response,
    error => {
      store.dispatch(LoadingActions.clear());

      const errorRes = error.response;
      if (errorRes) {
        if (errorRes.headers._abperrorformat && errorRes.status === 401) {
          //store.dispatch(PersistentStorageActions.setToken({}));
        }

        showError({ error: errorRes.data.error || {}, status: errorRes.status });
      } else {
        Toast.show({
          text: 'An unexpected error has occurred',
          buttonText: 'x',
          duration: 10000,
          type: 'danger',
          textStyle: { textAlign: 'center' },
        });
      }

      return Promise.reject(error);
    },
  );
}

function showError({ error = {}, status }) {
  let message = '';
  let title = I18next.t('AbpAccount::DefaultErrorMessage');

  if (typeof error === 'string') {
    message = error;
  } else if (error.details) {
    message = error.details;
    title = error.message;
  } else if (error.message) {
    message = error.message;
  } else {
    switch (status) {
      case 401:
        title = I18next.t('AbpAccount::DefaultErrorMessage401');
        message = I18next.t('AbpAccount::DefaultErrorMessage401Detail');
        break;
      case 403:
        title = I18next.t('AbpAccount::DefaultErrorMessage403');
        message = I18next.t('AbpAccount::DefaultErrorMessage403Detail');
        break;
      case 404:
        title = I18next.t('AbpAccount::DefaultErrorMessage404');
        message = I18next.t('AbpAccount::DefaultErrorMessage404Detail');
        break;
      case 500:
        title = I18next.t('AbpAccount::500Message');
        message = I18next.t('AbpAccount::InternalServerErrorMessage');
        break;
      default:
        break;
    }
  }

  Toast.show({
    text: `${title}\n${message}`,
    buttonText: 'x',
    duration: 10000,
    type: 'danger',
    textStyle: { textAlign: 'center' },
  });
}
