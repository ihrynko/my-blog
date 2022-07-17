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

export const addBook = async (book) => {
  try {
    return await client.post(`/Books`, book);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBook = async (bookId) => {
  try {
    return await client.delete(`/Books/${bookId}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateBook = async (bookId, book) => {
  try {
    return await client.patch(`/Books/${bookId}`, book);
  } catch (error) {
    return Promise.reject(error);
  }
};
