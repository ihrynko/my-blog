import { useEffect, useState, useMemo } from "react";
import { getBooks } from "../../service/api";
import StatisticsTable from "./Table";
import { StyledContainer } from "./styled";

export default function StaticticsPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
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
        accessor: (row) => new Date(row.publishDate),
        Cell: ({ cell: { value } }) => value.toLocaleDateString(),
      },
    ],

    []
  );

  return (
    <StyledContainer>
      <p>Books Statistics</p>
      {<StatisticsTable columns={columns} data={books} />}
    </StyledContainer>
  );
}
