import moment from "moment";
import { useMemo } from "react";
import { getBooks } from "../../api/books";
import useAxios from "../../hooks";
import StatisticsTable from "./Table";
import { StyledContainer } from "./styled";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";

export default function Statistics() {
  const { data, error, loading } = useAxios(getBooks);

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
