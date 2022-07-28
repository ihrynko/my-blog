import { modal, modalOpenToggleAction } from "../modal/reducers/modal";

describe("mock modal", () => {
  const state = { open: false, name: null };

  it("should return the state", () => {
    expect(modal(undefined, { type: undefined })).toEqual(state);
  });

  it("should open modal", () => {
    expect(modal(state, modalOpenToggleAction({ name: "Create" }))).toEqual({
      open: true,
      name: "Create",
    });
  });
});
