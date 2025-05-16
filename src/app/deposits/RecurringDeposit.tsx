import React, { useEffect, useState } from 'react'
import { Deposit } from '../constants';
type RDProps ={
    balance: number,
    setBalance: React.Dispatch<React.SetStateAction<number>>,
    recurringDeposits:Array<Deposit>,
    setShowRDModal: React.Dispatch<React.SetStateAction<boolean>>,
    setRecurringDeposits: React.Dispatch<React.SetStateAction<Array<Deposit>>>,
}

export default function RecurringDeposit({setShowRDModal}:RDProps) {
    const [deposit, setDeposit] = useState<Deposit>({depositAmount:0, type:false, recurringDeposit:0, startMonth:-1, maturityMonth:-1, reinvest:true});
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowRDModal(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='flex absolute w-screen h-screen z-10 backdrop-blur-lg justify-center items-center' onClick={()=>{setShowRDModal(false)}}>
            RecurringDeposit
        </div>
    )
}
