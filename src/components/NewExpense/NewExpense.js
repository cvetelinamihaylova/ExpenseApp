import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        setIsEditing(false);
        props.onAddExpense(expenseData);
    }
    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler}/>}
    </div>
};

export default NewExpense;