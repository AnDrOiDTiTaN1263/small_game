import React, { useState } from 'react'
import { Deposit } from '../constants'


export default function DepositComponent({deposit, id, setFixedDeposits, setBalance}:{deposit:Deposit, id:number,setFixedDeposits:React.Dispatch<React.SetStateAction<Array<Deposit>>>,setBalance:React.Dispatch<React.SetStateAction<number>>}) {
    const handleWithdraw = ()=>{
        setBalance(prev=>prev+deposit.depositAmount);
        setFixedDeposits(prev=>prev.filter((_,i)=>i!==id));
    }
    const [addDeposit, setAddDepoist] = useState(false);
    return (
    <div className='grid grid-flow-row-dense w-full h-20 px-2 border-2 rounded-lg'>
        <div className='flex  gap-10'>
            <div> 
                Amount: ${deposit.depositAmount.toFixed(2)}
            </div>

            <div className=''>
                Reinvest: <input type='checkbox' checked={deposit.reinvest} onChange={(e)=>{setFixedDeposits(prev=>prev.map((d, i) =>i === id ? { ...d, reinvest: e.target.checked } : d))}} />
            </div>
            
        </div>
        <div className='flex gap-2'>
            <button onClick={()=>{setAddDepoist(!addDeposit)}} className='border-2 px-2 h-8 rounded-lg hover:bg-black hover:text-white'>{addDeposit?"Cancel":"Deposit"}</button>
            {
                addDeposit &&
                <div className='flex gap-2'>
                    <input type='number' className=' px-1 border-2 outline-none h-8 rounded-lg'/>
                    <button className='border-2 px-2 h-8 rounded-lg hover:bg-black hover:text-white'>Confirm</button>
                </div>
            }
            <button onClick={handleWithdraw} className='border-2 px-2 h-8 rounded-lg hover:bg-black hover:text-white'>Withdraw</button>
        </div>
    </div>
  )
}
