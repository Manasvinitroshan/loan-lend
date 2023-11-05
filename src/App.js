import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lend from './components/Lend';
import { Box } from '@mui/material';
import BorrowList from './components/BorrowList';
import Signup2 from './components/Registration';
import { Login } from './components/LoginPage';
import { Register } from './components/Register';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Login/>}/>
      <Route path='/BorrowList' element={<BorrowList/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Lend' element={<Lend/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
