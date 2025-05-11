import React from 'react'
import { Deposit } from '../constants'


export default function DepositComponent({deposit}:{deposit:Deposit}) {
  return (
    <div className='grid grid-flow-row-dense w-full h-20 px-2 border-2 rounded-lg'>
        Amount: ${deposit.depositAmount.toFixed(2)}
    </div>
  )
}
