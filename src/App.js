import React from "react";
import Tableclass from "./component/table";
import dataSource from "./utils/data";
import columns from "./utils/columns";

function App() {
  return <Tableclass columns={columns} dataSource={dataSource} />;
}

export default App;
