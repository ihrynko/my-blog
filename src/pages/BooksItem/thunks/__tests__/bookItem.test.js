import { createAsyncThunk } from "@reduxjs/toolkit";

describe("mock bookItem createAsyncThunk", () => {
  it("accepts arguments and dispatches the action on resolve", async () => {
    const dispatch = jest.fn();

    const result = {
      _id: "62d47950fb286c7e14497c01",
      title: "Et doloribus officiis voluptatem sint.",
      description:
        "Quaerat est in voluptas sit dolorem ut temporibus reprehenderit. Non nemo placeat ratione sapiente et",
      date: "2022-07-17T20:27:44.685Z",
      createdAt: "2022-07-17T21:04:16.075Z",
      updatedAt: "2022-07-25T18:32:34.725Z",
      __v: 0,
      pageCount: 126,
    };

    const bookItemFetch = createAsyncThunk(
      "BOOK_ITEM_FETCH_START",
      async (id, { rejectWithValue }) => {
        try {
          return result;
        } catch (error) {
          return rejectWithValue(error.data);
        }
      }
    );
    const args = "62d47950fb286c7e14497c01";
    const thunkFunction = bookItemFetch(args);
    const thunkPromise = await thunkFunction(dispatch, () => {}, undefined);
    expect(thunkPromise.meta.arg).toBe(args);

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      bookItemFetch.pending(thunkPromise.meta.requestId, args)
    );

    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      bookItemFetch.fulfilled(result, thunkPromise.meta.requestId, args)
    );
  });
});
