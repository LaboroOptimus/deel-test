import React, { useState } from 'react';
import { Autocomplete } from './components/Autocomplete';

import './App.css';

/* I did a simple autocomplete - now it works only with my name and surname, but if it nessecary - it may be expanded */
/* Component has really simple styling, so, I decided that this can be neglected for the test task  */

const mock = ["Igor", "Igor Smirnov", "Igorrrr", "igor", "smirnov"];

function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState(mock)
  
  const handleChange = (v: string) => {
    setValue(v)
    let reg = new RegExp(`^${v}`, "i");
    let newData = mock.filter((item) => {
      return reg.test(item);
    });
    setData([...newData])
  }

  return (
    <div className="app">
      <div className='container'>
        <h2>Autocomplete component</h2>
        <Autocomplete value={value} handleChange={handleChange} data={data} />
      </div>
    </div>
  );
} 

export default App;
