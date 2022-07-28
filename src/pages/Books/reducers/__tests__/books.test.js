import { books } from "../books";
import { booksFetchStart } from "../../thunks/books";

describe("mock books reducer", () => {
  const initialState = {
    loading: true,
    data: [],
    error: null,
  };

  it("should return the initial state", () => {
    expect(books(undefined, { type: undefined })).toEqual(initialState);
  });
  it("should set loading true while books are pending", () => {
    const action = { type: booksFetchStart.pending };
    const state = books(
      {
        loading: true,
        error: null,
      },
      action
    );
    expect(state).toEqual({ loading: true, error: null });
  });
  it("should set books when action is fulfilled", () => {
    const action = {
      type: booksFetchStart.fulfilled,
      payload: [
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
    const state = books(
      {
        loading: false,
        error: null,
      },
      action
    );
    expect(state).toEqual({
      error: null,
      loading: false,
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
    });
  });
  it("should set error true when action is rejected", () => {
    const action = { type: booksFetchStart.rejected };
    const state = books(
      {
        loading: false,
        error: null,
      },
      action
    );
    expect(state).toEqual({ error: true, loading: false });
  });
});
