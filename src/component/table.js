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
    var tableHeaders = (
        <tr>
            {props.columns.map((column, index) => {
                return <th key={index}>{column}</th>;
            })}
        </tr>
    );
    var tableBody = props.dataSource.map((row, index) => {
        return (
            <tr key={index}>
                {props.columns.map( (column, index)=> {
                    return <td key={index}>{row[column]}</td>;
                })}
            </tr>
        );
    });
    return (
        <div className="table-div">

            <table width="100%">
                <thead key="thead">
                    {tableHeaders}
                </thead>
                <tbody key="tbody">
                    {tableBody}
                </tbody>
            </table>
            {/* <Table dataSource={props.dataSource} columns={props.columns} /> */}
            <GlobalStyle />
        </div>
    );
}

export default (Tableclass);
