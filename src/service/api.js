import axios from "axios";

axios.defaults.baseURL = "https://fakerestapi.azurewebsites.net/api/v1/";

export const getBooks = async () => {
  try {
    const response = await axios.get(`Books`);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};

export const getBookItem = async (id) => {
  try {
    const response = await axios.get(`Books/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};
