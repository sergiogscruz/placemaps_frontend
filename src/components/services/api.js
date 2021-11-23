import axios from "axios";

export const AxiosHelper = {
  initializeAxios: function() {
    axios.defaults.baseURL = 'https://place-maps.herokuapp.com/';
    if (localStorage.getItem('session')) {
      axios.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('session')).token
    } else {
      delete(axios.defaults.headers.common['Authorization'])
    }
  }
}