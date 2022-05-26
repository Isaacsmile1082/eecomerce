import { Routes, Route } from 'react-router-dom'
import { TableEmployers } from './components/Table';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/employers' element={<TableEmployers/>}/>
      </Routes>
    </>
    
  );
}

export default App;
