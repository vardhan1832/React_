import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Hyderabad",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Hyderabad",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Hyderabad",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Hyderabad",
    },
    {
      id: "e5",
      title: "Book",
      amount: 250,
      date: new Date(2023, 20, 12),
      location: "Hyderabad",
    },
  ];
  const [updatedExpenses,updateExpense] = useState(expenses)
  const addExpense = (expense) =>{
     const exp = {
      ...expense,
      id: Math.random().toString()
     }
     updateExpense(prevexp =>{
      return [exp,...prevexp]
     })
  }
  const [filteredArray,arrayFilter] = useState(updatedExpenses)
  const filterArray = (year)=>{
    const newArray = filteredArray.filter((x)=> x.date.getFullYear().toString().includes(year))
    arrayFilter(newArray)
  }
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onNewExpense = {addExpense} />
      <Expenses items={filteredArray} onFilterYear = {filterArray} />
    </div>
  );
}

export default App;
