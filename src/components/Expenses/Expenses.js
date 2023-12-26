import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((expenses)=>{
         return <ExpenseItem
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