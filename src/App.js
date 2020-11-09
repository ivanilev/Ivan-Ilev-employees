import React from 'react';
import { useSelector } from 'react-redux';
import FileInput from './containers/FileInput';
import DataGrid from './components/DataGrid';

export const App = () => {
  const longestEmployeePair = useSelector(state => state.longestEmployeePair)
  const isDataProcessed = Object.entries(longestEmployeePair).length;
  return (
    <div className='container mt-5'>
      {
        isDataProcessed ? <DataGrid data={longestEmployeePair}/> : <FileInput />
      }
    </div>
  )
}

export default App;