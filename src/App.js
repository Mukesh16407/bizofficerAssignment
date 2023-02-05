import {Routes, Route} from 'react-router-dom';

import { Header } from './components/Header';
import {Home} from './pages/Home'
import { Register } from './pages/register/Register';


function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/register'element={<Register/>}/>
      </Routes>
    </>
     
   
  );
}

export default App;
