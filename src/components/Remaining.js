import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, totalExpenses, remaining } = useContext(AppContext);

    // const initialTotalValue = 0;
    // const totalExpenses = expenses.reduce(
    //     (total, item) => {
    //         return (total = total + item.cost);
    //     }, initialTotalValue); //The reduce function's second parameter is the initial total value. The function then calculate the total ACCUMULATIVE sum

    const alertType = totalExpenses >= budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${remaining}</span>    
        </div>
    )
};

export default Remaining;