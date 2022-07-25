import { Pagination } from "../components/Pagination/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const FirstStory = {
  args: {
    pageNumber: 1,
    dataPerPage: 9,
    count: 20,
    paginationHandler: () => {},
  },
};
