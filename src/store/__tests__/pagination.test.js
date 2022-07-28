import {pagination,
  paginationChangePage,
  paginationChangeItemsPerPage,
} from "../pagination/reducer/pagination";

describe("mock pagination", () => {
  const initialState = { currentPage: 1, itemsPerPage: 9 };

  it("should return the initial state", () => {
    expect(pagination(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  it("should change page", () => {
    expect(pagination(initialState, paginationChangePage({ page: 2 }))).toEqual(
      { currentPage: 2, itemsPerPage: 9 }
    );
  });

  it("should change items per page", () => {
    expect(
      pagination(
        initialState,
        paginationChangeItemsPerPage({ itemsPerPage: 6 })
      )
    ).toEqual({ currentPage: 1, itemsPerPage: 6 });
  });
});
