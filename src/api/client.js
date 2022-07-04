import axios from "axios";

const client = axios.create({
  baseURL: "https://fakerestapi.azurewebsites.net/api/v1",
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default client;
