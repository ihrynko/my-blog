import {
  bookCreateInProgressAction,
  bookCreateSuccessAction,
  bookCreateErrorAction,
  bookCreateModalResetAction,
  createBook,
} from "../createBook";

describe("mock createBook reducer", () => {
  const initialState = {
    loading: false,
    data: {},
    error: null,
  };

  it("should return the initial state", () => {
    expect(createBook(undefined, { type: undefined })).toEqual(initialState);
  });
  it("should set loading true while action is pending", () => {
    const action = { type: bookCreateInProgressAction };
    const state = createBook(
      {
        loading: true,
        error: null,
      },
      action
    );
    expect(state).toEqual({ loading: true, error: null });
  });
  it("should add book when action is fulfilled", () => {
    const action = {
      type: bookCreateSuccessAction,
      payload: {
        _id: "1",
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
    const state = createBook(
      {
        loading: false,
        error: null,
      },
      action
    );
    expect(state).toEqual({
      error: null,
      loading: false,
      data: {
        _id: "1",
        title: "Et doloribus officiis voluptatem sint.",
        description:
          "Quaerat est in voluptas sit dolorem ut temporibus reprehenderit. Non nemo placeat ratione sapiente et",
        date: "2022-07-17T20:27:44.685Z",
        createdAt: "2022-07-17T21:04:16.075Z",
        updatedAt: "2022-07-25T18:32:34.725Z",
        __v: 0,
        pageCount: 126,
      },
    });
  });
  it("should set error true when action is rejected", () => {
    const action = { type: bookCreateErrorAction };
    const state = createBook(
      {
        loading: false,
        error: null,
      },
      action
    );
    expect(state).toEqual({ error: true, loading: false });
  });
  it("should return initial state", () => {
    const action = { type: bookCreateModalResetAction };
    const state = createBook(
      {
        loading: false,
        error: null,
      },
      action
    );
    expect(state).toEqual(initialState);
  });
});
