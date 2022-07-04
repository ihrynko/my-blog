import moment from "moment";
import { useEffect, useState, useMemo } from "react";
import { getBooks } from "../../api/books";
import StatisticsTable from "./Table";
import { StyledContainer } from "./styled";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";

export default function StaticticsPage() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getBooks()
      .then(
        setBooks,
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      )
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
      {loading && !books.length && !error && <Loader />}
      {books.length && !error && (
        <StyledContainer>
          {<StatisticsTable columns={columns} data={books} />}
        </StyledContainer>
      )}
      {error && <Notification />}
    </>
  );
}
