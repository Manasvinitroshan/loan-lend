import React, { useState } from 'react';
import borrowData from './borrow.json'; // Adjust the path as needed
import './borrowList.css'; // Ensure this is the correct path to your CSS file

const BorrowList = () => {
  const [loans] = useState(borrowData); // State initialization with JSON data

  const handleBorrowClick = (loanId) => {
    // Logic to handle borrowing a loan
    console.log(`Loan ID ${loanId} borrowed`);
    // You would typically handle this with an API call or some other action
  };

  // Function to navigate back using browser history
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <header className="header">
        <button onClick={goBack} className="back-button">Back</button>
      </header>
      <table className="loan-table">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Amount Lending</th>
            <th>Interest Rate</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td><img src={loan.profile_picture} alt={loan.name} className="profile-pic" /></td>
              <td>{loan.name}</td>
              <td>${loan.amount_lending.toLocaleString()}</td>
              <td>{loan.interest_rate}%</td>
              <td>{loan.duration} months</td>
              <td>
                <button onClick={() => handleBorrowClick(loan.id)} className="borrow-button">
                  Borrow
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowList;