import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020)


  const addFilterHandler = (enteredFilter) => {
    setFilteredYear(enteredFilter);
  };
  const filteredExpenses = props.items.filter(prop => prop.date.getFullYear().toString() === filteredYear.toString());
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onAddFilter={addFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
};
export default Expenses;