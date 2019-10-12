import axios from 'axios';

const request = (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
      }).then(({ data }) => {
        return data;
      }).catch(error => {
          return error
      });
}

const get = (url, data) => request("GET", url, data);

const api = {
    home: {
        getHomePage: () => get("https://private-4639ce-ecommerce56.apiary-mock.com/home", {})
    }
}

export default api;