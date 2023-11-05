import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lend from './components/Lend';
import { Box } from '@mui/material';
import BorrowList from './components/BorrowList';


function App() {
  return (

    <BrowserRouter>
    <Routes>
     
      <Route path='/BorrowList' element={<BorrowList/>}/>
      <Route path='/Lend' element={<Lend/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
