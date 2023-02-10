
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home'
import { Register } from './pages/register/Register';
import { Header } from './components/Header';


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
