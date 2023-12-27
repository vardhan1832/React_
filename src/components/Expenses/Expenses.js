import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
       {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expenses)=>{
         return <ExpenseItem
         key={expenses.id}
         title={expenses.title}
         amount={expenses.amount}
         date={expenses.date}
         location={expenses.location}
       />
      })}
    </Card>
  );
}

export default Expenses;