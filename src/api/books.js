import client from "./client";

export const getBooks = async () => {
  try {
    return await client.get("/books");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBookItem = async (bookId) => {
  try {
    return await client.get(`/books/${bookId}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addBook = async (data) => {
  try {
    return await client.post(`/books`, { ...data });
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

export const updateBook = async (data, bookId) => {
  try {
    return await client.patch(`/Books/${bookId}`, { ...data });
  } catch (error) {
    return Promise.reject(error);
  }
};
