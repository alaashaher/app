import React from "react";
import MapClass from "./map";
import {
  Table,
  TableHeadCell,
  TableRow,
  TableValueCell,
  ViewContainer
} from "./styled";

export default ({ dataSource = [], columns = [] }) => {
  // const headerCells = columns.map((column, idx) => {
  //   const { title, style } = column;
  //   return <TableHeadCell key={idx} style={style} children={title} />;
  // });
  const bodyCells = dataSource.map((rowData, idx) => (
    <TableRow key={idx}>
      {columns.map(({ dataIndex, render, style }, idx) => (
        <TableValueCell key={idx} style={style}>
          {dataIndex ? rowData[dataIndex] : render(rowData)}
        </TableValueCell>
      ))}
    </TableRow>
  ));

  return (
    <ViewContainer>
      <Table>
        <thead style={{ minHeight: "50px", border: "1px solid green" }}>
          <TableRow><MapClass Chlid={<TableHeadCell/>} columns={columns}/></TableRow>
        </thead>

        <tbody style={{ minHeight: "120px", border: "1px solid blue" }}>
          {bodyCells}
        </tbody>
      </Table>
    </ViewContainer>
  );
};
