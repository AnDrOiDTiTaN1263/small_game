'use client'
import { useState } from "react";

export default function Home() {

  const userProperties = useState([]);
  const userStocks =useState([]);
  const userCommodities = useState([]);

  return (
    <div className="grid grid-flow-row grid-rows-12 w-screen h-screen gap-2">
        <div className="grid row-span-1 w-full col-span-full justify-start items-center px-5 bg-slate-300">
        <button className="border-2 h-10 px-2 rounded-xl hover:bg-black hover:text-white hover:border-0 ">Restart</button>

        </div>
        <div className="grid row-span-11 w-full bg-slate-300">


        </div>
    </div>
  );
}
