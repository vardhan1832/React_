import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpense = (expense)=>{
    props.onNewExpense(expense)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpense}/>
    </div>
  );
};

export default NewExpense;