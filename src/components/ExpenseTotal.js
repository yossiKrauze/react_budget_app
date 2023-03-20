import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    
    const initialTotalValue = 0;
    const totalExpenses = expenses.reduce(
        (total, item) => {
            return (total = total + item.cost);
        }, initialTotalValue); //The reduce function's second parameter is the initial total value. The function then calculate the total ACCUMULATIVE sum
    
    return (
        <div className='alert alert-primary'>
            <span>
                Spent so far: ${totalExpenses}
            </span>
        </div>
    );
};

export default ExpenseTotal;
