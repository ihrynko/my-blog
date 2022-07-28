import { Pagination } from "../components/Pagination/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const FirstPage = {
  args: {
    pageNumber: 1,
    dataPerPage: 9,
    count: 20,
    paginationHandler: () => {},
  },
};

export const ALotOfPages = {
  args: {
    pageNumber: 17,
    dataPerPage: 9,
    count: 1000,
    paginationHandler: () => {},
  },
};

export const LastPage = {
  args: {
    pageNumber: 5,
    dataPerPage: 10,
    count: 50,
    paginationHandler: () => {},
  },
};
