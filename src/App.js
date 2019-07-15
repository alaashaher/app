import React from 'react';
import './App.css';
import Tableclass from './component/table';
const dataSource = [
  {
      key: '1',
      name: 'ahmed',
      age: 32,
      job: 'accounting',
  },
  {
      key: '2',
      name: 'mahmoud',
      age: 23,
      job: 'doctor',
  },
  {
      key: '3',
      name: 'esraa',
      age: 23,
      job: 'doctor',
  },
  {
      key: '4',
      name: 'eman',
      age: 23,
      job: 'doctor',
  },
  {
      key: '5',
      name: 'yasser',
      age: 23,
      job: 'doctor',
  },
  {
      key: '6',
      name: 'mohammed ',
      age: 23,
      job: 'doctor',
  },
  {
      key: '7',
      name: 'zayed',
      age: 23,
      job: 'doctor',
  },
  {
      key: '8',
      name: 'fatma',
      age: 23,
      job: 'doctor',
  },
  {
      key: '9',
      name: 'mariem',
      age: 23,
      job: 'doctor',
  },
  {
      key: '10',
      name: 'asmaa',
      age: 23,
      job: 'doctor',
  },
  {
      key: '11',
      name: 'faten',
      age: 23,
      job: 'doctor',
  },
  {
      key: '12',
      name: 'amany',
      age: 23,
      job: 'doctor',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Job',
    dataIndex: 'job',
    key: 'job',
  },
];
function App() {
  return (
    <div className="App">
      <Tableclass columns={columns} dataSource={dataSource}/>
    </div>
  );
}

export default App;
