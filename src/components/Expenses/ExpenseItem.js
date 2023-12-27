import React , {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title)
  const clickHandler = () =>{
    setTitle('Updated!!')
    console.log(title)
  }
  const [amount,setAmount] = useState(props.amount)
  const amountHandler = () =>{
    setAmount(100)
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-location'> Location : {props.location}</div>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={clickHandler}>change title</button>
        <button onClick={amountHandler}>change amount</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
