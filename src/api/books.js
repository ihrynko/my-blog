import client from "./client";

export const getBooks = async () => {
  try {
    return await client.get("/Books");
  } catch (error) {
    return error;
  }
};

export const getBookItem = async (bookId) => {
  try {
    return await client.get(`/Books/${bookId}`);
  } catch (error) {
    return error;
  }
};
