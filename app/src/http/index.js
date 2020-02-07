import axios from "axios";
let baseURL = "http://192.168.0.180:3000/api";
const service = axios.create({
  timeout: 6000,
  baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
});
service.interceptors.request.use(config => {
  console.log(config)
  return config;
});
service.interceptors.response.use(config => {
  let data = config.data
  if (data.code == 200) {
    console.log('操作成功')
  }
  return data.msg;
});

export default service;
