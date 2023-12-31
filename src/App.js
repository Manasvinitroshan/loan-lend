import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lend from './components/Lend';
import { Box } from '@mui/material';
import BorrowList from './components/BorrowList';
import {ImaKms} from './components/attempt2';
import { Login } from './components/LoginPage';
import { Register } from './components/Register';
import Home from './components/Home';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Login/>}/>
     
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Lend' element={<Lend/>}/>
      <Route path='/Registration' element={<ImaKms/>}/>
      <Route path='/BorrowList' element={<BorrowList/>}/>
      <Route path='/Home' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
