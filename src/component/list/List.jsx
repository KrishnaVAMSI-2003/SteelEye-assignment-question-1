import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, timeData, currency }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>
              {
                timeData.find((order) => order["&id"] === row["&id"]).timestamps
                  .orderSubmitted
              }
            </ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume[currency]}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
