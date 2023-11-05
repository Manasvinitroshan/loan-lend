import React from 'react'
import { Paper, TextField,Button } from '@mui/material';
import './style.css'

const Lend = () => {
  return (
    <div className="centerContainer">
        <Paper className="paper" elevation={10}>
        <h1 className='font'>Lend</h1>
        <div style={{padding:'70px'}}>
        <TextField
        label="Amount"
        variant="outlined"
        margin="20px"
        width="70%"
        // Additional props like value, onChange, and more can be added here
      />

<TextField
        label="Interest Rate"
        variant="outlined"
        width="70%"
        style={{ margin: '40px' }}  // Add margin to push it down
        // Additional props like value, onChange, and more can be added here
      />

<TextField
        label="Payback Time"
        variant="outlined"
        width="70%"
         // Add margin to push it down
        // Additional props like value, onChange, and more can be added here
      />

        </div>

        <Button width="70%" className='button' color="primary" >Create</Button>
   
     
  </Paper>
    </div>
    


  )
}

export default Lend