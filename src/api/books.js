import client from "./client";

export const getBooks = async () => {
  try {
    return await client.get("/Books");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBookItem = async (bookId) => {
  try {
    return await client.get(`/Books/${bookId}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
