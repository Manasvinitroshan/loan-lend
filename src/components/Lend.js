import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Lend.css';

const Lend = () => {
  return (
    <div className="centerContainer background " style={{ display: 'flex' }}>
      <Paper className="paper inside" elevation={0} style={{ flex: 1 }}>
        <h2 className="font center" style={{ paddingTop: 25 }}>
          Lend
        </h2>
        <div className="center" style={{ padding: '70px' }}>
          <TextField
            label="Amount"
            variant="outlined"
            margin="20px"
            className="center"
            style={{ width: '70%' }}
          />
          <TextField
            label="Interest Rate"
            variant="outlined"
            style={{ width: '70%', margin: '40px' }}
            className="center"
          />
          <TextField
            label="Payback Time"
            variant="outlined"
            style={{ width: '70%' }}
            className="center"
          />
        </div>
        <Button className="manas" type="submit">
          Login
        </Button>
      </Paper>
      
      <Paper
        className="paper inside"
        elevation={0}
        style={{ flex: 1 }}
      >
        <h2 className="font center" style={{ marginRight: 25 }}>
          Borrow
        </h2>
        <div className="center" style={{ padding: '70px' }}>
          {/* Add content for the second paper here */}
        </div>
        <Button className="manas" type="submit">
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default Lend;
