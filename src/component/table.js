import React from "react";
import { createGlobalStyle } from "styled-components";

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
    color: white;
  }
  th {
    text-align: center;
  }
  }
  div {
    padding: 16px;
  }
`;

const Table = () => {
    return (
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        <th>Clint id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ahmed</td>
                        <td>22</td>
                        <td>accounting</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>esraa</td>
                        <td>23</td>
                        <td>doctor</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ayman</td>
                        <td>25</td>
                        <td>engiering</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>eman</td>
                        <td>30</td>
                        <td>pharmacist</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>doaa</td>
                        <td>40</td>
                        <td>Lawyer</td>
                    </tr>
                </tbody>
            </table>
            <GlobalStyle />
        </div>
    );
}

export default (Table);
