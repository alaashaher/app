import React from "react";
import Tableclass from "./component/table";
import dataSource from "./utils/data";
import columns from "./utils/columns";

function App() {
  return (
    <div className="app">
      <p>Table</p>
      <Tableclass columns={columns} dataSource={dataSource} />
    </div>);
}

export default App;
