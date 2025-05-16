import React, { useEffect, useState } from 'react'
import DepositComponent from './FD'

import {FDINTERESTRATE, Deposit} from "@/app/constants";

type FDProps = {
    fixedDeposits:Array<Deposit>,
    setShowFDModal: React.Dispatch<React.SetStateAction<boolean>>,
    setFixedDeposits: React.Dispatch<React.SetStateAction<Array<Deposit>>>,
    balance:number,
    setBalance: React.Dispatch<React.SetStateAction<number>>
}

export default function FixedDeposit({fixedDeposits, balance, setBalance, setFixedDeposits,setShowFDModal}:FDProps) {
    const [deposit, setDeposit] = useState<Deposit>({depositAmount:0, type:false, recurringDeposit:0, startMonth:-1, maturityMonth:-1, reinvest:false});

    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setShowFDModal(false);
        }
    };
    window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "depositAmount"){
            e.target.value = e.target.value.indexOf(".") >= 0 ? e.target.value.slice(0, e.target.value.indexOf(".") + 3) : e.target.value;
            setDeposit({...deposit, [e.target.name]: parseFloat(e.target.value)})
        }
        if (e.target.name === "reinvest"){
            setDeposit({...deposit, [e.target.name]: e.target.checked})
        }
    }
    const reset = ()=>{
        setDeposit({...deposit, ['depositAmount']: 0.0, ['reinvest']:false});
    }

    const handleAdd = ()=>{
        if( deposit.depositAmount >0 && balance >= deposit.depositAmount){
            setFixedDeposits([...fixedDeposits, deposit]);
            setBalance(balance-deposit.depositAmount)
            localStorage.setItem("fds", JSON.stringify([...fixedDeposits, deposit]))
        }
    }
    return (
    <div className='absolute z-10 backdrop-blur-xl w-screen h-screen justify-center items-center flex' >

        <div className="flex w-full h-full absolute " onClick={()=>{setShowFDModal(false)}}></div>
        <div className='grid w-[90%] h-[90%]  z-20 rounded-xl grid-flow-col-dense gap-2 grid-cols-11'>
            <div className='grid col-span-5 grid-rows-11 rounded-t-xl grid-flow-row-dense overflow-hidden  gap-2'>
                <div className='grid row-span-1 bg-zinc-200 justify-center items-center text-2xl font-semibold rounded-xl'>Your Deposits</div>
                <div className='grid row-span-10 bg-zinc-200 rounded-xl overflow-y-scroll gap-2 p-2'>
                    {fixedDeposits.map((x,i)=><DepositComponent key={i} deposit={x} id={i} setBalance={setBalance} setFixedDeposits={setFixedDeposits} />)}
                </div>
            </div>
            <div className='grid col-span-5 bg-zinc-200 rounded-b-xl p-2 rounded-lg'>
                <div className='grid justify-center items-center row-span-1 text-2xl font-semibold'>New Deposit</div>
                <div className='grid row-span-10'>
                    <div>Add a deposit of any amount to get: {(FDINTERESTRATE*100).toFixed(2)}% in interest payments every month</div>
                    <div>You currently have: ${balance.toFixed(2)} you can use to deposit</div>
                    <div className='flex w-full gap-2'>
                        <label className='text-nowrap w-fit px-2'>Deposit Amount:</label>
                        <input onChange={handleChange} value={deposit.depositAmount.toString()} type='number' name='depositAmount'  className='grid row-span-1 h-8 w-full border-2 outline-none rounded-lg px-2' />
                    </div>
                    <div className='flex w-full justify-center gap-10'>
                        <button onClick={reset} className='flex border-2 w-fit h-10 px-5 justify-center items-center rounded-lg hover:bg-black hover:text-white'>Reset</button>
                        <button onClick={()=>{setDeposit({...deposit, ['depositAmount']: balance})}} className='flex border-2 w-fit h-10 px-5 justify-center items-center rounded-lg hover:bg-black hover:text-white'>all in</button>
                    </div>

                    <div className='flex w-full gap-2 items-center'>
                        <label className='text-nowrap w-fit px-2'>Reinvest the interest?</label>
                        <input onChange={handleChange} type="checkbox" checked={deposit.reinvest} name='reinvest' className='grid row-span-1 h-4 w-4 border-2 outline-none rounded-lg px-2' />
                    </div>
                    <div className='flex flex-col justify-start p-2 border-2 row-span-1'>
                        <div className='flex justify-center items-center text-xl'>Summary</div>
                        <div className="flex">Amount: ${deposit.depositAmount ? deposit.depositAmount.toFixed(2) : 0.00.toFixed(2)}</div>
                        {(deposit.depositAmount > 0 && !deposit.reinvest) && <div>Interest per Month: ${(deposit.depositAmount*FDINTERESTRATE).toFixed(3)}</div>}
                        {(deposit.depositAmount > 0 && deposit.reinvest) &&
                            <div>
                                Every month: <b>${(deposit.depositAmount*FDINTERESTRATE).toFixed(3)}</b> will be reinvested into the fixed deposit and will
                                compound over time.
                            
                            </div>}
                    </div>
                    <div className='grid row-span-2 justify-center items-end pb-5'>
                        <button className='w-fit px-5 h-10 border-2 rounded-lg' onClick={handleAdd}>Confirm</button>
                    </div>

                </div>
            </div>
            <div className='grid col-span-1 w-full justify-center items-start py-2'>
                <button onClick={()=>{setShowFDModal(false)}} className='text-white border-2 bg-zinc-800 px-2 h-10 rounded-lg hover:bg-white hover:text-black'>Close</button>
            </div>
        </div> 
    </div>
  )
}
