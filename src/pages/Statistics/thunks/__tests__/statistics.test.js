import { createAsyncThunk, configureStore } from "@reduxjs/toolkit";

describe("mock statistics createAsyncThunk", () => {
  it("accepts arguments and dispatches the action on resolve", async () => {
    const dispatch = jest.fn();

    const result = [
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
    ];
    const statisticsFetchStart = createAsyncThunk(
      "STATISTICS_FETCH_START",
      async (_, { rejectWithValue }) => {
        try {
          return result;
        } catch (error) {
          return rejectWithValue(error.data);
        }
      }
    );
    let timesReducerCalled = 0;

    const reducer = () => {
      timesReducerCalled++;
    };

    const store = configureStore({
      reducer,
    });

    // reset from however many times the store called it
    timesReducerCalled = 0;
    await store.dispatch(statisticsFetchStart());

    expect(timesReducerCalled).toBe(2);
  });
});
