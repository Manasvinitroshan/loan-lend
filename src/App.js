import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lend from './components/Lend';
import { Box } from '@mui/material';
import BorrowList from './components/BorrowList';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route index element={<Lend/>}/>
      <Route path='/BorrowList' element={<BorrowList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
