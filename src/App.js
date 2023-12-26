import ExpenseItem from "./components/ExpenseItem";

function App() {
  const array = [
    {
      id: "e1",
      name: "Toilet Paper",
      amount: "$94.56",
      date: new Date(2012, 8, 23),
      location: "Hyderabad",
    },
    {
      id: "e2",
      name: "New Desk",
      amount: "$300",
      date: new Date(2018, 8, 30),
      location: "Delhi",
    },
    {
      id: "e3",
      name: "Books for the Kids",
      amount: "$150",
      date: new Date(2023, 3, 23),
      location: "Chennai",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {array.map((expense)=>{
        return (<ExpenseItem
          title={expense.name}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />)
      })}
    </div>
  );
}

export default App;
