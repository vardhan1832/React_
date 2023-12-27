import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const clickHandler = () =>{
    console.log('Clicked!!')
  }
  const deleteHandler = () =>{

  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-location'> Location : {props.location}</div>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>change title</button>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
