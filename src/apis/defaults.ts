import Axios from 'axios';

export const setBaseURL = (url: string) => {
  Axios.defaults.baseURL = url;
  Axios.defaults.headers.common['Content-Type'] = 'application/json';
  Axios.defaults.headers.common['Accept'] = 'application/json';
};
