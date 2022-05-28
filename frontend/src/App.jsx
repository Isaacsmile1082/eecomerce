import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { routes } from './constants/routes';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        {
          routes.map(route => (
            <Route {...route}/>
          ))
        }
      </Routes>
    </>
    
  );
}

export default App;
