import { bookItem } from "../bookItem";
import { bookItemFetchInStart } from "../../thunks/bookItem";

describe("mock bookItem reducer", () => {
  const initialState = {
    loading: true,
    data: {},
    error: null,
  };

  it("should return the initial state", () => {
    expect(bookItem(undefined, { type: undefined })).toEqual(initialState);
  });
  it("should set loading true while book is pending", () => {
    const action = { type: bookItemFetchInStart.pending };
    const state = bookItem(
      {
        loading: true,
        error: null,
      },
      action
    );
    expect(state).toEqual({ loading: true, error: null });
  });
  it("should set book when action is fulfilled", () => {
    const action = {
      type: bookItemFetchInStart.fulfilled,
      payload: {
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
    const state = bookItem(
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
    });
  });
  it("should set error true when action is rejected", () => {
    const action = { type: bookItemFetchInStart.rejected };
    const state = bookItem(
      {
        loading: false,
        error: null,
      },
      action
    );
    expect(state).toEqual({ error: true, loading: false });
  });
});
