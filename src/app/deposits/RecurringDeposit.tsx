import React, { useState } from 'react'
import { Deposit } from '../constants';
type RDProps ={
    balance: number,
    setBalance: React.Dispatch<React.SetStateAction<number>>,
    recurringDeposits:Array<Deposit>,
    setShowRDModal: React.Dispatch<React.SetStateAction<boolean>>,
    setRecurringDeposits: React.Dispatch<React.SetStateAction<Array<Deposit>>>,
}

export default function RecurringDeposit() {
    const [deposit, setDeposit] = useState<Deposit>({depositAmount:0, type:false, recurringDeposit:0, startMonth:-1, maturityMonth:-1, reinvest:true});


    return (
        <div>RecurringDeposit</div>
    )
}
