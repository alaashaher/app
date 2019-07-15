import styled from "styled-components";

const sharedcss = `
  padding: 5px;
  background-color: #989e9e;
  color: white !important;
  background: #989e9e !important;
`;

const cellCss = `
  border: 3px solid #ccccccf0;
  border-collapse: collapse;
  text-align: center;
`;

export const ViewContainer = styled.div`
  padding: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border: 3px solid #ccccccf0;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  ${sharedcss};
  &:hover {
    background-color: #989e9e !important;
  }
`;

export const TableHeadCell = styled.th`
  font-weight: 900;
  text-align: center;
  ${sharedcss};
  ${cellCss};
`;

export const TableValueCell = styled.td`
  ${sharedcss};
  ${cellCss}
`;
