import React from 'react';
function FixedDeposit() {
    const deposit = (duration, principal) => {
        let interest = 0;
        switch (duration) {
            case '6 months':
                interest = principal * 0.05;
                break;
            case '1 year':
                interest = principal * 0.06;
                break;
            case '2 year':
                interest = principal * 0.07;
                break;
            case '3 year':
                interest = principal * 0.08;
                break;
            default:
                alert('Invalid duration');
                break;
        }
        const total = principal + interest;
        alert(`Principal: ${principal}, Interest: ${interest}, Total: ${total}`);
    }
    return (
        <div>
            <h1>Fixed Deposit</h1>
            <button onClick={() => deposit('6 months', 1000)}>6 months</button>
            <button onClick={() => deposit('1 year', 1000)}>1 year</button>
            <button onClick={() => deposit('2 year', 1000)}>2 year</button>
            <button onClick={() => deposit('3 year', 1000)}>3 year</button>
        </div>
    );
}
export default FixedDeposit;