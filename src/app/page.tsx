'use client'
import { useEffect, useState } from "react";
import { calculateFixedDepositInterestPayment, calculateMonthlyRepayment, updateFixedDeposits, updateRecurringDeposits } from "./utils";
import FixedDeposit from "./deposits/FixedDeposit";
import { Deposit, Property } from "./constants";
import Banner from "./components/Banner";


export default function Home() {
  const [balance, setBalance] = useState( 0);
  const income = 1000;
  const [month, setMonth] = useState(1);
  const [properties,setProperties] = useState<Array<Property>>([]);
  const [stocks, setStocks] =useState([]);
  const [commodities, setCommodities] = useState([]);
  const [liabilities, setLiabilities] = useState([]);
  const [fixedDeposits, setFixedDeposits] = useState<Array<Deposit>>([]);
  const [recurringDeposits, setRecurringDeposits] = useState<Array<Deposit>>([]);
  
  useEffect(()=>{
    setBalance(JSON.parse(localStorage?.getItem("balance")||'0'))
    setMonth(JSON.parse(localStorage?.getItem("month") || "1"));
    setFixedDeposits(JSON.parse(localStorage?.getItem("fds") || "[]"))
  },[])



  const [monthlyCostsPaid, setMonthlyCostsPaid] = useState(false);
  const[monthlyIncomeClaimed, setMonthlyIncomeClaimed] = useState(false);
  const [showFDModal, setShowFDModal] = useState(false);
  const calculateCashFlow = ()=>{
    var propertyIncome:number = properties.reduce((acc,b)=>acc + b.income,0);
    var propertyExpenses:number = properties.reduce((totalRepayment, property) => totalRepayment + calculateMonthlyRepayment(property), 0); 
    var rdIncome = calculateFixedDepositInterestPayment(fixedDeposits);
    
    return [propertyExpenses, propertyIncome+ propertyExpenses+rdIncome+income];
  }
  const cashFlow = calculateCashFlow();
  
  const updateMonth = ()=>{
    if(monthlyIncomeClaimed && monthlyCostsPaid){
      // do it
      setFixedDeposits(updateFixedDeposits(fixedDeposits));
      setRecurringDeposits(updateRecurringDeposits(recurringDeposits, month));
      localStorage.setItem('month', JSON.stringify(month+1));
      setMonth(month+1);
      setMonthlyCostsPaid(false)
      setMonthlyIncomeClaimed(false);
      localStorage.setItem('balance', JSON.stringify(balance));
    }
  }
  const handleExpenses = ()=>{
    if (balance > cashFlow[0]){
      setBalance(balance-cashFlow[0]);
      setMonthlyCostsPaid(true);
    }
    
  }
  const handleBoth = ()=>{
    // if we can barely scrape through then do it
    if (balance + cashFlow[1] - cashFlow[0] >= 0){
      setBalance(parseFloat((balance + cashFlow[1] - cashFlow[0]).toFixed(2)))
      setMonthlyCostsPaid(true);
      setMonthlyIncomeClaimed(true);
    }
  }

  const restart = ()=>{
    localStorage.clear();
    window.location.reload()
  }
  const [bannerDetails, setBannerDetails] = useState({isGood:false, text:""})
  const [showBanner, setShowBanner]= useState(false);
  return (
    <div className="grid grid-flow-row grid-rows-12 w-screen h-screen gap-2">
        
        {showBanner && <Banner bannerDetails={bannerDetails}  setShowBanner={setShowBanner}/>}
        <div className="grid grid-flow-col row-span-1 w-full col-span-full justify-between items-center px-5 bg-slate-300">
        <button className="border-2 h-10 px-2 rounded-xl hover:bg-black hover:text-white hover:border-0 " onClick={restart}>Restart</button>
        <div className="flex text-[2rem]">$AU {balance.toFixed(2)}</div>
        <div className="w-30" />
        </div>
          <div className="grid grid-flow-row row-span-11 w-full h-ful gap-2 pb-2 px-2 grid-rows-10 grid-cols-1 lg:grid-rows-2 lg:grid-cols-1">
            <div className="grid row-span-5 lg:row-span-1 col-span-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-2 lg:grid-flow-col-dense grid-flow-row-dense">
              <div className="grid bg-slate-500 row-span-1 col-span-1 rounded-lg p-2">
                Stocks & Commodities
              </div>
              <div className="grid  row-span-1 col-span-1 rounded-lg p-2 justify-center border-2 grid-flow-row items-center">
                <div className="flex flex-col gap-0 leading-[0.9] w-full items-center">
                  Month
                  <div className="flex text-[4rem] font-extrabold flex-col">{month}</div>
                  
                </div>
                {!(monthlyIncomeClaimed && monthlyCostsPaid) && <button className="grid row-span-1 h-12 justify-center items-center rounded-lg w-full border-2" onClick={()=>{handleBoth()}}>Collect income and pay</button>}
                  <div className="h-fit grid w-fit grid-rows-1 grid-cols-2 gap-5 justify-center items-center grid-flow-col-dense border-2 bg-slate-200">
                    {
                      // monthly income
                      !(monthlyIncomeClaimed) && 
                      <div className="grid grid-flow-row row-span-full items-center text-xl">
                        $ {cashFlow[1]}
                        <button onClick={()=>{setBalance(balance+cashFlow[1]);setMonthlyIncomeClaimed(true)}} className="border-2 w-fit px-2 rounded-lg h-10 text-lg">Claim Income</button>
                        
                      </div>
                    }
                    {
                      // monthly costs
                      (!monthlyCostsPaid) && 
                      <div className="grid grid-flow-row row-span-full items-center text-xl">
                        ${cashFlow[0]}
                        <button onClick={()=>{handleExpenses()}} className="border-2 w-fit px-2 rounded-lg h-10 text-lg">Pay Costs</button>
                      </div>
                    }
                    {
                    (monthlyCostsPaid && monthlyIncomeClaimed) && <button onClick={()=>{updateMonth()}} className="h-10 border-2 px-5 rounded-lg row-span-2 w-fit">Next Month</button>
                    }
                  </div>
              </div>
              <div className="grid bg-slate-500 row-span-1 col-span-1 rounded-lg p-2">
                Real Estate
              </div>
            </div>
            <div className="grid  row-span-5 lg:row-span-1 col-span-1 gap-2  grid-rows-3 lg:grid-rows-1 lg:grid-cols-3  lg:grid-flow-col-dense grid-flow-row-dense">
              <div className="grid bg-slate-500 row-span-1 col-span-1 rounded-lg p-2">
                News
              </div>
              <div className="grid bg-slate-500 row-span-1 col-span-1 rounded-lg p-2">
                Assets and liabilities
              </div>
              <div className="grid border-2 row-span-1 col-span-1 rounded-lg p-2">
                <button onClick={()=>{setShowFDModal(true)}} className="grid border-2 w-full h-10 justify-center items-center rounded-lg">Fixed Deposit</button>
                <button className="grid border-2 w-full h-10 justify-center items-center rounded-lg">Recurring Deposit</button>
              </div>
            </div>
        </div>
        {showFDModal && <FixedDeposit balance={balance} setBalance={setBalance} fixedDeposits={fixedDeposits} setFixedDeposits={setFixedDeposits} setShowFDModal={setShowFDModal}/>}
    </div>
  );
}
