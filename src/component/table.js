import React from "react";
import { createGlobalStyle } from "styled-components";
import { Table } from 'antd';
const GlobalStyle = createGlobalStyle`
  table {
  width: 100%;
  border: 3px solid #ccccccf0;
  border-collapse: collapse;
  th,
  td {
    border: 3px solid #ccccccf0;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
    background-color: #989e9e;
    color: white !important;
    background: #989e9e !important;
  }
  th {
    font-weight: 900;
  }
  tr:hover {
    background-color: #989e9e !important;
  }
  th {
    text-align: center;
  }
  }
  div {
    padding: 16px;
  }
`;

const Tableclass = (props) => {
    return (
        <div className="table-div">
            <Table dataSource={props.dataSource} columns={props.columns} />
            <GlobalStyle />
        </div>
    );
}

export default (Tableclass);
