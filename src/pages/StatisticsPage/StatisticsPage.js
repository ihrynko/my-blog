import moment from "moment";
import { useEffect, useState, useMemo } from "react";
import { getBooks } from "../../api/books";
import StatisticsTable from "./Table";
import { Spinner } from "reactstrap";
import { StyledContainer } from "./styled";
import Notification from "../../components/Notification";

export default function StaticticsPage() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getBooks()
      .then(setBooks, setLoading(false))
      .catch((error) => setError(error));
  }, []);

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
      {loading && !books.length && !error && <Spinner />}
      {books.length && !error && (
        <StyledContainer>
          {<StatisticsTable columns={columns} data={books} />}
        </StyledContainer>
      )}
      {error && <Notification />}
    </>
  );
}
