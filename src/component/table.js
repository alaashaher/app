import React from "react";
import { createGlobalStyle } from "styled-components";
// import { Table } from 'antd';
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
    var tableHeaders = (<thead>
        <tr>
            {props.columns.map((column) => {
                return <th>{column}</th>;
            })}
        </tr>
    </thead>);
    var tableBody = props.dataSource.map((row) => {
        return (
            <tbody>
                <tr>
                    {props.columns.map(function (column) {
                        return <td>{row[column]}</td>;
                    })}
                </tr>
            </tbody>);
    });
    return (
        <div className="table-div">

            <table width="100%">
                {tableHeaders}
                {tableBody}
            </table>
            {/* <Table dataSource={props.dataSource} columns={props.columns} /> */}
            <GlobalStyle />
        </div>
    );
}

export default (Tableclass);
