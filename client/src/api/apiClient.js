import axios from "axios";
import queryString from "query-string";
export const axiosApiBook = axios.create({
  baseURL: "https://api.itbook.store/1.0",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
export const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
  responseType: "json",
  headers: {
    "content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response?.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    throw err;
  }
);
axiosApiBook.interceptors.response.use(
  (response) => {
    if (response?.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    throw err;
  }
);


