import React from 'react'
import { Paper, TextField,Button } from '@mui/material';
import './style.css'

const Lend = () => {
  return (
    <div className="centerContainer background">
        <Paper className="paper inside" elevation={0}>
        <h2 className='font center '>Lend</h2>
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

        <Button width="70%" className='button center' color="primary" >Create</Button>
   
     
  </Paper>
    </div>
    


  )
}

export default Lend