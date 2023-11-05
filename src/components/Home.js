import React, { useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Rectangle } from 'recharts';
import './Home.css';
import { Paper,Typography,Avatar, Box,Grid } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import borrowData from './borrow.json'; // Adjust the path as needed


function Home() {
  const handleBorrowClick = (loanId) => {
    // Logic to handle borrowing a loan
    console.log(`Loan ID ${loanId} borrowed`);
    // You would typically handle this with an API call or some other action
  };

  const [loans] = useState(borrowData); // State initialization with JSON data
  const data = [
    {
      name: 'Year 1',
      Lend: 4000,
      Borrowed: 2400,
      amt: 2400,
    },
    {
      name: 'Year 2',
      Lend: 3000,
      Borrowed: 1398,
      amt: 2210,
    },
    {
      name: 'Year 3',
      Lend: 2000,
      Borrowed: 9800,
      amt: 2290,
    },
    {
      name: 'Year 4',
      Borrowed: 2780,
      Lend: 3908,
      amt: 2000,
    },
    {
      name: 'Year 5',
      Borrowed: 1890,
      Lend: 4800,
      amt: 2181,
    },
    {
      name: 'Year 6',
      Lend: 2390,
      Borrowed: 3800,
      amt: 2500,
    },
    {
      name: 'Year 7',
      Lend: 3490,
      Borrowed: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="centerContainer2 ">
     <Paper className='center2 paper2'>

     <div className='main-title center'>
            <h1>DASHBOARD

              <div >
              <Avatar alt="Nihanth Attaluri" src="./assets/nithu.png" />
              </div>
              
            </h1>
        </div>

        <div className="label">
      <h2>Active Contracts:</h2>
    </div>
        <Box className='color4'>
        
        <tbody className='loan-table'>
          {loans.map((loan) => (
            <tr key={loan.id}>
              
              <td>{loan.name}</td>
              <td>${loan.amount_lending.toLocaleString()}</td>
              <td>{loan.interest_rate}%</td>
              <td>{loan.duration} months</td>
              <td>
                <button onClick={() => handleBorrowClick(loan.id)} className="borrow-button">
                  Pay Back
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </Box>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Borrowed" fill="lightBlue" />
                <Bar dataKey="Lend" fill="grey" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Lend" stroke="grey" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Borrowed" stroke="#add8e6" />
                </LineChart>
            </ResponsiveContainer>

        </div>

     </Paper>
    </div>
  );
}

export default Home;