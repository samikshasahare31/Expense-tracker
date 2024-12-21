import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!input || !amount) return;

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };
    setExpenses([...expenses, newExpense]);
    setInput('');
    setAmount('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className='container mt-4 expense-main'>
      <h2>Expense Tracker</h2>
      <div className='mb-3'>
        <input
          className='form-control mb-2'
          type='text'
          placeholder='Expense'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className='form-control mb-2'
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className='btn  bg-primary-subtle' onClick={addExpense}>
          Add Expense
        </button>
      </div>

      {expenses.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Number</th>
              <th scope='col'>Expense</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <th scope='row'>{expense.id}</th>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => deleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseTracker;





