import React from "react";
import {
  Table,
  TableHeadCell,
  TableRow,
  TableValueCell,
  ViewContainer
} from "./styled";

export default ({ dataSource = [], columns = [] }) => {
  const renderView = rowData =>
    columns.map(({ dataIndex, render, style, title }, idx) => {
      let children = title;
      let Component = TableHeadCell;
      if (rowData) {
        Component = TableValueCell;
        children = dataIndex ? rowData[dataIndex] : render(rowData);
      }

      return <Component key={idx} style={style} children={children} />;
    });

  const headerCells = renderView();

  const bodyCells = dataSource.map((rowData, idx) => (
    <TableRow key={idx} children={renderView(rowData)} />
  ));

  return (
    <ViewContainer>
      <Table>
        <thead style={{ minHeight: "50px", border: "1px solid green" }}>
          <TableRow>{headerCells}</TableRow>
        </thead>

        <tbody style={{ minHeight: "120px", border: "1px solid blue" }}>
          {bodyCells}
        </tbody>
      </Table>
    </ViewContainer>
  );
};
