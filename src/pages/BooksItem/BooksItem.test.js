/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  cleanup,
  act,
  waitFor,
  getByAltText,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/index";
import BookItemPage from "./BooksItem";

const action = {
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
let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  cleanup();
  container.remove();
});
describe("test BookItem", () => {
  it("should render", () => {
    act(() => {
      render(
        <Provider store={store}>
          <Router>
            <BookItemPage
              match={{ params: { _id: "62d47950fb286c7e14497c01" } }}
            />
          </Router>
        </Provider>,
        container
      );
    });
    const element = screen.queryByTestId("book-title");
    waitFor(() => expect(element).toBeInTheDocument());
    waitFor(() => expect(screen.getByText(/Back/i)).toBeInTheDocument());
  });
});
