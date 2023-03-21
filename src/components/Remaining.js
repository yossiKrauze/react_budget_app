import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function RemainingBudget() {
    const { budget, totalExpenses, remaining } = useContext(AppContext);

    const alertType = totalExpenses >= budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${remaining}</span>
        </div>
    );
}

export default RemainingBudget;