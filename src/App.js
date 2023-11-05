import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lend from './components/Lend';
import { Box } from '@mui/material';
import BorrowList from './components/BorrowList';
import Signup2 from './components/signup2';


function App() {
  return (

    <BrowserRouter>
    <Routes>
     
      <Route path='/BorrowList' element={<BorrowList/>}/>
      <Route path='/Lend' element={<Lend/>}/>
      <Route path='/Signup2' element={<Signup2/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
