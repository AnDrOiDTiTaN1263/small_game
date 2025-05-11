export type Security ={
  name: string;
  price: Array<number>;
  news: Array<News>;
}
export type News={
  headline: string;
  sentiment: string;
}

export type Deposit={
  type: boolean;
  depositAmount: number;
  recurringDeposit: number;
  startMonth: number;
  maturityMonth: number;
  reinvest: boolean;
}

export const FDINTERESTRATE:number = 0.0046; // roughly 5.5% P.A.
export const RDINTERESTRATE:number = 0.0042; // roughly 5% P.A.


export const companies:Array<Security> =  [
  {
    name: "Nebula Dynamics",
    price: [120.5, 122.3, 125.0, 123.7, 128.1, 130.2],
    news: [
      { headline: "Nebula Dynamics Announces Breakthrough in Quantum Networking", sentiment: "positive" },
      { headline: "Investors React Positively to Nebula’s Q2 Earnings Beat", sentiment: "positive" },
      { headline: "Concerns Raised Over Nebula’s Supply Chain Stability", sentiment: "negative" }
    ]
  },
  {
    name: "Veltrix Motors",
    price: [87.4, 88.1, 89.9, 90.5, 91.3, 89.0],
    news: [
      { headline: "Veltrix Motors Unveils Affordable Electric SUV", sentiment: "positive" },
      { headline: "Production Delays Hit Veltrix’s European Plant", sentiment: "negative" },
      { headline: "Analysts Say Veltrix Well-Positioned for Long-Term Growth", sentiment: "positive" }
    ]
  },
  {
    name: "Aureon Labs",
    price: [43.2, 44.5, 46.0, 45.3, 47.1, 48.4],
    news: [
      { headline: "Aureon Labs Receives FDA Approval for New Cancer Treatment", sentiment: "positive" },
      { headline: "Insiders Sell Shares After Price Surge", sentiment: "negative" },
      { headline: "Aureon Expands R&D with New AI Drug Discovery Team", sentiment: "positive" }
    ]
  },
  {
    name: "Polaris Grid",
    price: [31.7, 30.9, 32.4, 34.0, 33.6, 32.8],
    news: [
      { headline: "Energy Grid Upgrade in Texas Secured by Polaris", sentiment: "positive" },
      { headline: "Quarterly Earnings Fall Short of Analyst Expectations", sentiment: "negative" },
      { headline: "Polaris Invests in Wind and Solar Initiatives", sentiment: "positive" }
    ]
  },
  {
    name: "Zenitech Solutions",
    price: [62.1, 61.3, 63.7, 65.2, 66.0, 67.8],
    news: [
      { headline: "Zenitech Expands Enterprise Software Suite with AI Features", sentiment: "positive" },
      { headline: "Privacy Concerns Emerge Over Zenitech Cloud Sync", sentiment: "negative" },
      { headline: "Zenitech Gains Ground in Southeast Asian Market", sentiment: "positive" }
    ]
  },
  {
    name: "Crystallis Biotech",
    price: [95.8, 97.3, 99.5, 101.0, 100.2, 98.7],
    news: [
      { headline: "Crystallis Begins Human Trials for Promising Alzheimer’s Drug", sentiment: "positive" },
      { headline: "Patent Dispute Causes Stock to Dip Temporarily", sentiment: "negative" },
      { headline: "Major Investment from Healthcare VC Bolsters R&D", sentiment: "positive" }
    ]
  },
  {
    name: "Ironhill Logistics",
    price: [54.0, 53.5, 55.2, 56.1, 57.3, 56.0],
    news: [
      { headline: "Ironhill Secures Government Contract for Military Supply Chain", sentiment: "positive" },
      { headline: "Driver Strike Disrupts Distribution Network", sentiment: "negative" },
      { headline: "New Automation System Expected to Cut Costs by 15%", sentiment: "positive" }
    ]
  },
  {
    name: "Halcyon Entertainment",
    price: [29.4, 28.9, 30.2, 31.0, 30.7, 32.1],
    news: [
      { headline: "Streaming Service Halcyon+ Hits 10 Million Subscribers", sentiment: "positive" },
      { headline: "Mixed Reviews for Halcyon's Latest Film Release", sentiment: "neutral" },
      { headline: "Partnership with Gaming Giant Sparks Investor Optimism", sentiment: "positive" }
    ]
  },
  {
    name: "Trident AeroSpace",
    price: [210.5, 212.3, 215.8, 213.4, 218.0, 220.1],
    news: [
      { headline: "Trident Launches Reusable Rocket Prototype", sentiment: "positive" },
      { headline: "Supply Delays Affect Jet Engine Division", sentiment: "negative" },
      { headline: "Defense Contracts Provide Revenue Stability", sentiment: "positive" }
    ]
  },
  {
    name: "Ecliptica Fintech",
    price: [70.8, 72.4, 74.6, 75.0, 73.9, 76.3],
    news: [
      { headline: "Ecliptica Launches AI-Powered Investment Tool", sentiment: "positive" },
      { headline: "Regulators Question Ecliptica’s Crypto Asset Practices", sentiment: "negative" },
      { headline: "Strong User Growth Bolsters Market Confidence", sentiment: "positive" }
    ]
  }
]

export const commodities:Array<Security> = [
  {
    name: "Gold",
    price: [1950, 1980, 2025, 2000, 2040, 2075],
    news: [
      { headline: "Investors Flock to Gold Amid Global Economic Uncertainty", sentiment: "positive" },
      { headline: "Gold Prices Climb as Dollar Weakens", sentiment: "positive" },
      { headline: "Strong Jobs Report Dampens Gold Demand", sentiment: "negative" },
      { headline: "Central Banks Increase Gold Reserves Significantly", sentiment: "positive" }
    ]
  },
  {
    name: "Silver",
    price: [24.1, 24.7, 25.3, 24.8, 26.0, 26.5],
    news: [
      { headline: "Silver Sees Boost from Industrial Demand Surge", sentiment: "positive" },
      { headline: "Rising Interest Rates Pressuring Silver Prices", sentiment: "negative" },
      { headline: "Solar Industry Expansion Fuels Silver Bull Market", sentiment: "positive" },
      { headline: "Silver Market Volatility Raises Investor Concerns", sentiment: "negative" }
    ]
  },
  {
    name: "Crude Oil",
    price: [75.3, 77.2, 79.8, 76.5, 80.1, 82.4],
    news: [
      { headline: "OPEC+ Production Cuts Drive Oil Prices Higher", sentiment: "positive" },
      { headline: "Oil Prices Fall Amid Fears of Global Recession", sentiment: "negative" },
      { headline: "Geopolitical Tensions in the Middle East Support Oil Rally", sentiment: "positive" },
      { headline: "U.S. Crude Inventories Unexpectedly Rise", sentiment: "negative" }
    ]
  },
  {
    name: "Natural Gas",
    price: [2.5, 2.7, 3.0, 2.8, 3.1, 3.3],
    news: [
      { headline: "Colder Winter Forecast Boosts Natural Gas Demand", sentiment: "positive" },
      { headline: "European LNG Imports Hit Record Levels", sentiment: "positive" },
      { headline: "Natural Gas Prices Dip on Milder Weather Expectations", sentiment: "negative" },
      { headline: "Supply Chain Constraints Lift Natural Gas Futures", sentiment: "positive" }
    ]
  },
  {
    name: "Copper",
    price: [4.10, 4.25, 4.35, 4.20, 4.40, 4.50],
    news: [
      { headline: "Copper Prices Rise on Green Energy Investment Boom", sentiment: "positive" },
      { headline: "China’s Slowing Manufacturing Weighs on Copper Market", sentiment: "negative" },
      { headline: "Mining Disruptions in Chile Tighten Global Copper Supply", sentiment: "positive" },
      { headline: "Electric Vehicle Demand Sparks Copper Rally", sentiment: "positive" }
    ]
  },
  {
    name: "Platinum",
    price: [920, 940, 960, 950, 980, 1000],
    news: [
      { headline: "Platinum Gains as Auto Industry Recovers", sentiment: "positive" },
      { headline: "Palladium Substitution Slows Platinum Demand Growth", sentiment: "negative" },
      { headline: "South African Mine Strike Sends Platinum Prices Higher", sentiment: "positive" },
      { headline: "Investors Reevaluate Platinum’s Role as Safe Haven", sentiment: "neutral" }
    ]
  }
]

export const globalSentiments = [
  {
    headline: "Federal Reserve Hints at Future Interest Rate Cuts",
    sentiment: "positive"
  },
  {
    headline: "Unexpected Surge in Inflation Worries Global Markets",
    sentiment: "negative"
  },
  {
    headline: "Trade Agreement Signed Between Major Economies Boosts Confidence",
    sentiment: "positive"
  },
  {
    headline: "Geopolitical Tensions in Eastern Europe Rattle Investors",
    sentiment: "negative"
  },
  {
    headline: "Global Shift Toward Clean Energy Impacts Oil and Auto Sectors",
    sentiment: "neutral"
  },
  {
    headline: "US Dollar Weakens, Driving Up Commodity Prices",
    sentiment: "positive"
  },
  {
    headline: "Tech Regulation Bill Passes, Raising Concerns for Growth Stocks",
    sentiment: "negative"
  },
  {
    headline: "Major Cyberattack Targets Financial Infrastructure in Asia",
    sentiment: "negative"
  },
  {
    headline: "Emerging Markets Show Strong Recovery Post-Pandemic",
    sentiment: "positive"
  },
  {
    headline: "Global Semiconductor Shortage Eases, Boosting Manufacturing Output",
    sentiment: "positive"
  }
]
export type Property ={
  name: string;
  fullPrice: number;
  downPayment: number;
  paidAmount: number;
  auctionFee:number;
  interestRate:number;
  income: number;
  repaymentAmount:number;
  loanStartMonth:number;
  loanEndMonth:number;

}
export const properties: Array<Property> = [
  {
    name: "Lakeside Villa",
    fullPrice: 750000,
    downPayment: 150000,
    paidAmount: 0,
    auctionFee: 12000,
    interestRate: 3.5,
    income: 3750,
    repaymentAmount: 0,  // Placeholder for repayment amount, calculated later
    loanStartMonth: 0,  // Initialized to 0
    loanEndMonth: 0,    // Initialized to 0
  },
  {
    name: "Urban Loft",
    fullPrice: 520000,
    downPayment: 104000,
    paidAmount: 0,
    auctionFee: 9500,
    interestRate: 4.1,
    income: 3160,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Mountain Cabin",
    fullPrice: 310000,
    downPayment: 62000,
    paidAmount: 0,
    auctionFee: 7200,
    interestRate: 3.8,
    income: 2410,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Coastal Retreat",
    fullPrice: 890000,
    downPayment: 178000,
    paidAmount: 0,
    auctionFee: 13500,
    interestRate: 3.2,
    income: 4250,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Suburban Estate",
    fullPrice: 610000,
    downPayment: 122000,
    paidAmount: 0,
    auctionFee: 9800,
    interestRate: 4.0,
    income: 3500,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Greenfield Market",
    fullPrice: 950000,
    downPayment: 190000,
    paidAmount: 0,
    auctionFee: 15000,
    interestRate: 4.3,
    income: 5200,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Sunset Mall",
    fullPrice: 2450000,
    downPayment: 490000,
    paidAmount: 0,
    auctionFee: 30000,
    interestRate: 4.0,
    income: 15000,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Downtown Parking Hub",
    fullPrice: 480000,
    downPayment: 96000,
    paidAmount: 0,
    auctionFee: 7000,
    interestRate: 3.9,
    income: 2100,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Harborview Apartments",
    fullPrice: 670000,
    downPayment: 134000,
    paidAmount: 0,
    auctionFee: 10200,
    interestRate: 3.7,
    income: 3600,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Orchard Plaza",
    fullPrice: 830000,
    downPayment: 166000,
    paidAmount: 0,
    auctionFee: 11000,
    interestRate: 3.6,
    income: 4700,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Metro Center Garage",
    fullPrice: 560000,
    downPayment: 112000,
    paidAmount: 0,
    auctionFee: 8600,
    interestRate: 4.1,
    income: 2350,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Crescent Heights",
    fullPrice: 720000,
    downPayment: 144000,
    paidAmount: 0,
    auctionFee: 9300,
    interestRate: 3.9,
    income: 3850,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  },
  {
    name: "Evergreen Galleria",
    fullPrice: 3100000,
    downPayment: 620000,
    paidAmount: 0,
    auctionFee: 45000,
    interestRate: 4.2,
    income: 17500,
    repaymentAmount: 0,
    loanStartMonth: 0,
    loanEndMonth: 0,
  }
];
