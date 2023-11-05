import React from 'react'
import { Paper, TextField,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import './Lend.css'

const Lend = () => {
  return (
    <div className="centerContainer background">
        <Paper className="paper inside" elevation={0}>
        <h2 className='font center ' style={{mb:20}}>Lend</h2>
        <div className='center'  style={{padding:'70px'}}>
        <TextField
        label="Amount"
        variant="outlined"
        margin="20px"
        className='center'
        width="70%"
        // Additional props like value, onChange, and more can be added here
      />

<TextField
        label="Interest Rate"
        variant="outlined"
        width="70%"
        className='center'
        style={{ margin: '40px' }}  // Add margin to push it down
        // Additional props like value, onChange, and more can be added here
      />

<TextField
        label="Payback Time"
        variant="outlined"
        width="70%"
        className='center'
         // Add margin to push it down
        // Additional props like value, onChange, and more can be added here
      />

        </div>

        <button className="manas" type="submit">Login</button>
   
     
  </Paper>
    </div>
    


  )
}

export default Lend