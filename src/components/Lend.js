import { Paper,TextField,Button, } from '@mui/material';
import './Lend.css';
import { useNavigate } from 'react-router-dom'

const Lend = () => {
  const navigate = useNavigate()
  return (
    
    <div className="centerContainer background " style={{ display: 'flex' }}>
      <Paper className="paper inside" elevation={0} style={{ flex: 1 }}>
        <h2 className="font center" style={{ paddingTop: 25 }}>
          Lend
        </h2>
        <div className="center" style={{ padding: '60px' }}>
          <TextField
            label="Amount"
            variant="outlined"
            margin-bottom="20px"
            className="center"
            style={{ width: '100%' }}
          />
          <br></br>
          <br></br>
          <TextField
            label="Interest Rate"
            variant="outlined"
            margin = '20px' 
            padding = '100px'
            style={{ width: '100%'}}
            className="center"
          />
         <br></br>
          <br></br>
          <TextField
            label="Payback Time"
            variant="outlined"
            style={{ width: '100%' }}
            className="center"
          />
        </div>
        <button className="submit"  type="submit" onClick={() => navigate('Home')}>Lend</button>
         
       
      </Paper>
      
      <Paper
        className="paper inside"
        elevation={0}
        style={{ flex: 1 }}
      >
        <h2 className="font center" style={{ paddingTop: 25 }}>
          Borrow
        </h2>
        <div className="center" style={{ padding: '160px' }}>
          {/* Add content for the second paper here */}
        </div>

        <button className="submit"  type="submit" onClick={() => navigate('BorrowList')}>Borrow</button>
      </Paper>
    </div>
  );
};

export default Lend;