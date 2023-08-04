import styles from "./ListRow.module.css";

const ListCell = ({
  children,
  row,
  timeData,
  setSelectedOrderDetails,
  setSelectedOrderTimeStamps,
}) => {
  const handleRowClick = () => {
    setSelectedOrderDetails(row.executionDetails);
    setSelectedOrderTimeStamps(
      timeData.find((order) => row["&id"] === order["&id"]).timestamps
    );
  };
  return (
    <tr className={styles.cell} onClick={handleRowClick}>
      {children}
    </tr>
  );
};

export default ListCell;
