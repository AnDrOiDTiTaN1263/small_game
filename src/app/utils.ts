import {Deposit, Property,FDINTERESTRATE, RDINTERESTRATE} from "./constants";

export function calculateMonthlyRepayment(property: Property) {
  const principal = property.fullPrice - property.downPayment;
  const monthlyInterestRate = property.interestRate / 100 / 12; // Convert annual rate to monthly decimal
  
  // Calculate the number of months in the loan term based on start and end month
  const loanTermInMonths = property.loanEndMonth - property.loanStartMonth;

  if (loanTermInMonths <= 0) {
    throw new Error("Invalid loan term. End month must be after start month.");
  }

  // Amortization formula to calculate monthly repayment
  const monthlyRepayment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermInMonths)) / 
                            (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1);

  return monthlyRepayment;
}


export function calculateFixedDepositInterestPayment(deposits:Array<Deposit>):number{
    var payouts = 0;
    const updatedDeposits = deposits.map(d => ({ ...d }));
    updatedDeposits.forEach(deposit => {
        const interest = deposit.depositAmount * FDINTERESTRATE;
        if (!deposit.reinvest) {
        payouts += interest;
        }
    });
    return payouts;
}

export function updateFixedDeposits(deposits:Array<Deposit>):Array<Deposit>{
    const updatedDeposits =deposits.map(d=>({...d}));
    updatedDeposits.forEach((x)=>{
        if(x.reinvest){
            x.depositAmount += x.depositAmount*FDINTERESTRATE;
        }
    })
    return updatedDeposits;
}


export function updateRecurringDeposits(deposits: Array<Deposit>, curMonth:number) :Array<Deposit> {
  const updatedDeposits = deposits.map(d=>({...d}));

  updatedDeposits.forEach((x)=>{
    if (x.maturityMonth > curMonth){
        if(x.reinvest){
            x.depositAmount += x.depositAmount**RDINTERESTRATE;
        }
        x.depositAmount += x.recurringDeposit;
    }
  });
  return updatedDeposits;
}

export function calculateTax(fds:Array<Deposit>, rds:Array<Deposit>, realEstates:Array<Property>){
  const fdInterestTax = fds.reduce((accum:number, d:Deposit)=>accum+d.depositAmount*FDINTERESTRATE,0)
  const rdInterestTax = rds.reduce((accum:number, d:Deposit)=>accum + d.depositAmount*RDINTERESTRATE,0)
  const realEstateTax = realEstates.reduce((accum: number, r: Property) => {
    const loanAmount = r.fullPrice - r.paidAmount;
    const annualInterest = loanAmount * (r.interestRate / 100);
    return accum + r.income * 12 - annualInterest;
  }, 0);
  return {fdInterestTax, rdInterestTax, realEstateTax}
}