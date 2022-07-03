import client from "./client";

export const getBooks = async () => {
  try {
    return await client.get("/Books");
  } catch (error) {
    return error;
  }
};

export const getBookItem = async (id) => {
  try {
    return await client.get(`/Books/${id}`);
  } catch (error) {
    return error;
  }
};
