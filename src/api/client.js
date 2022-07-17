import axios from "axios";

const client = axios.create({
  // baseURL: "https://fakerestapi.azurewebsites.net/api/v1",
  baseURL: "http://localhost:4000",
});

client.interceptors.response.use(
  (response) => response.data.data,
  (response) => Promise.reject(response.response.data)
);

export default client;
