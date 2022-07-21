import moment from "moment";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatisticsTable from "./Table";
import { StyledContainer } from "./styled";
import { Loader } from "../../components/Loader/Loader";
import { Notification } from "../../components/Notification/Notification";
import { statisticsFetchStart } from "./thunks/statistics";

import * as selectors from "./selectors/statistics";

export default function Statistics() {
  const dispatch = useDispatch();

  const data = useSelector(selectors.statisticsDataSelector);
  const loading = useSelector(selectors.statisticsLoadingSelector);
  const error = useSelector(selectors.statisticsErrorSelector);

  useEffect(() => {
    dispatch(statisticsFetchStart());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
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
        Header: "CREATE DATE",
        accessor: (row) => moment(row.date).format("DD.MM.YYYY"),
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
