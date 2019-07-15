import styled from "styled-components";

const sharedcss = `
  padding: 10px;
  color: white !important;
  background: rgba(0,0,0,0.4);
`;

const cellCss = `
  text-align: center;
`;

export const ViewContainer = styled.div`
  padding: 16px;
`;

export const TableRow = styled.tr`
  ${sharedcss};
  border-bottom: .1px solid #eee;
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.2);
  }
  &:hover {
    color: #000;
    background: rgba(25, 18, 18, 0.7);
    cursor: pointer;
  }
  &:hover td:first-child {
    background: rgba(25, 18, 18, 0.7);
  }
`;

export const TableHeadCell = styled.th`
  padding: 15px;
  font-weight: 900;
  text-align: center;
  line-height: 12px;
  background: #2e63e7;
  text-transform: uppercase;
`;

export const TableValueCell = styled.td`
  ${sharedcss};
  ${cellCss}
  &:first-child {
    padding-left: 20px;
    font-weight: 700;
    background: rgba(109, 176, 231, 0.35);
    transition: backgrounf 0.6s;
}
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-collapse: collapse;
  border-spacing: 0;
`;