import moment from "moment";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatisticsTable from "./Table";
import { StyledContainer } from "./styled";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { booksFetchStart } from "./reducersRTK/books";

import * as selectors from "./selectors/books";

export default function Statistics() {
  const dispatch = useDispatch();

  const data = useSelector((state) => selectors.booksDataSelector(state));
  const loading = useSelector(selectors.booksLoadingSelector);
  const error = useSelector(selectors.booksErrorSelector);

  useEffect(() => {
    dispatch(booksFetchStart());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "NAME",
        accessor: "title",
      },

      {
        Header: "DESCRIPTION",
        accessor: "description",
        Cell: ({ cell: { value } }) => value.slice(0, 200),
      },
      {
        Header: "PAGES",
        accessor: "pageCount",
      },
      {
        Header: "CREATE DATE",
        accessor: (row) => moment(row.publishDate).format("DD.MM.YYYY"),
      },
    ],

    []
  );

  return (
    <>
      {loading && !data && !error && <Loader />}
      {!loading && !error && (
        <StyledContainer>
          {<StatisticsTable columns={columns} data={data} />}
        </StyledContainer>
      )}
      {!loading && error && <Notification />}
    </>
  );
}
