'use client'
import { useState } from "react";

export default function Home() {
  const balance = 0;
  const userProperties = useState([]);
  const userStocks =useState([]);
  const userCommodities = useState([]);

  return (
    <div className="grid grid-flow-row grid-rows-12 w-screen h-screen gap-2">
        <div className="grid grid-flow-col row-span-1 w-full col-span-full justify-between items-center px-5 bg-slate-300">
        <button className="border-2 h-10 px-2 rounded-xl hover:bg-black hover:text-white hover:border-0 ">Restart</button>
        <div>$AU {balance.toFixed(2)}</div>
        <div className="w-30" />
        </div>
        <div className="grid grid-flow-row row-span-11 w-full gap-2 pb-2 px-2">
          <div className="grid grid-flow-col-dense gap-2 ">
            <div className="grid bg-slate-500 rounded-lg"></div>
            <div className="grid bg-slate-500 rounded-lg"></div>
            <div className="grid bg-slate-500 rounded-lg"></div>
          </div>
          <div className="grid grid-flow-col-dense gap-2 ">
            <div className="grid bg-slate-500 rounded-lg"></div>
            <div className="grid bg-slate-500 rounded-lg"></div>
            <div className="grid bg-slate-500 rounded-lg"></div>
          </div>
        </div>
    </div>
  );
}
