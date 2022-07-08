import moment from "moment";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookFetchInStart } from "./actions/books";
import StatisticsTable from "./Table";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { StyledContainer } from "./styled";

import * as selectors from "./selectors/books";

export default function Statistics() {
  const loading = useSelector(selectors.bookLoadingSelector);
  const data = useSelector((state) => selectors.bookDataSelector(state));
  const error = useSelector(selectors.bookErrorSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookFetchInStart());
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
