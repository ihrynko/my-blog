import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";
import BookItemPage from "./BooksItem";

// afterEach(() => {
//   cleanup();
// });

// describe("BookItemPage", () => {
//   it("renders BookItemPage", () => {
//     render(
//       <Router>
//         <BookItemPage />
//       </Router>
//     );
//     expect(screen.getByText(/Back/i)).toBeInTheDocument();
//   });
// });

// describe("test BookItemPage", () => {
//   it("should renders as expected", () => {
//     const wrapper = shallow(<BookItemPage />);

//     expect(wrapper.length).toEqual(1);

//   });
// });
