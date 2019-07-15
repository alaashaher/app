import React from 'react';
import './App.css';
import Tableclass from './component/table';
const dataSource = [
  {
    'name': 'ahmed',
    'age': 32,
    'job': 'accounting',
  },
  {
    'name': 'mahmoud',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'esraa',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'eman',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'yasser',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'mohammed ',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'zayed',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'fatma',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'mariem',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'asmaa',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'faten',
    'age': 23,
    'job': 'doctor',
  },
  {
    'name': 'amany',
    'age': 23,
    'job': 'doctor',
  },
];

const columns =
  ['name', 'age', 'job']
  ;
function App() {
  return (
    <div className="App">
      <Tableclass columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default App;
