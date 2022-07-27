import client from "../client";
import {
  getBooks,
  getBookItem,
  createBook,
  deleteBook,
  updateBook,
} from "../books";

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      post: jest.fn(),
      delete: jest.fn(),
      patch: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  };
});

describe("mock api calls", () => {
  it("should return all books", async () => {
    const mockedResponse = {
      status: 200,
      error: false,
      data: [
        {
          _id: "62d47950fb286c7e14497c01",
          title: "Et doloribus officiis voluptatem sint.",
          description:
            "Quaerat est in voluptas sit dolorem ut temporibus reprehenderit. Non nemo placeat ratione sapiente et",
          date: "2022-07-17T20:27:44.685Z",
          createdAt: "2022-07-17T21:04:16.075Z",
          updatedAt: "2022-07-25T18:32:34.725Z",
          __v: 0,
          pageCount: 126,
        },
        {
          _id: "62d47950fb286c7e14497c03",
          title: "Consequatur repellat repellendus eos molestiae.",
          description:
            "Quos doloremque alias quam voluptatem et. Aliquam rerum non odit vero.",
          date: "2022-07-17T20:27:44.685Z",
          createdAt: "2022-07-17T21:04:16.476Z",
          updatedAt: "2022-07-22T08:42:38.933Z",
          __v: 0,
          pageCount: 325,
        },
      ],
    };

    jest.spyOn(client, "get").mockResolvedValue(mockedResponse);
    const result = await getBooks();
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(Array.isArray(result.data)).toBe(true);
    expect(result).toEqual(mockedResponse);
  });
  it("should return book", async () => {
    const mockedResponse = {
      status: 200,
      error: false,
      data: {
        _id: "62d47950fb286c7e14497c01",
        title: "Et doloribus officiis voluptatem sint.",
        description:
          "Quaerat est in voluptas sit dolorem ut temporibus reprehenderit. Non nemo placeat ratione sapiente et",
        date: "2022-07-17T20:27:44.685Z",
        createdAt: "2022-07-17T21:04:16.075Z",
        updatedAt: "2022-07-25T18:32:34.725Z",
        __v: 0,
        pageCount: 126,
      },
    };
    jest.spyOn(client, "get").mockResolvedValue(mockedResponse);
    const result = await getBookItem({ bookId: mockedResponse.data._id });
    expect(client.get).toHaveBeenCalledTimes(1);
    expect(result.data.description).toBe(
      "Quaerat est in voluptas sit dolorem ut temporibus reprehenderit. Non nemo placeat ratione sapiente et"
    );
    expect(result).toEqual(mockedResponse);
  });
  it("should post a book", async () => {
    const mockedResponse = {
      _id: "1",
      title: "Book 1",
      description: "Book 1",
      pageCount: 146,
    };
    jest.spyOn(client, "post").mockResolvedValue(mockedResponse);
    const result = await createBook({ data: mockedResponse });
    expect(client.post).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockedResponse);
  });
  it("should delete a book", async () => {
    const mockedResponse = {
      _id: "1",
      title: "Book 1",
      description: "Book 1",
      pageCount: 146,
    };
    jest.spyOn(client, "delete").mockResolvedValue(mockedResponse);
    const result = await deleteBook({ bookId: mockedResponse._id });
    expect(client.delete).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockedResponse);
  });
  it("should update a book", async () => {
    const mockedResponse = {
      title: "Et doloribus officiis voluptatem sint.",
      description: "Book 2",
      pageCount: 126,
    };
    jest.spyOn(client, "patch").mockResolvedValue(mockedResponse);
    const result = await updateBook({
      bookId: "62d47950fb286c7e14497c01",
      data: mockedResponse,
    });
    expect(client.patch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockedResponse);
  });
});
