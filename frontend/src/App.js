

function App() {
  let grid = Array(100).fill(Array(100).fill(0));
  


  return (
    <div className="flex bg-slate-400 w-fit h-fit justify-center items-center text-white text-sm">
     {grid.map((row,i)=>{
        return(<div key={"row"+i} className="flex flex-col gap-1 w-full h-full">
          {row.map((value, j)=>{
            return(
              <div key={i*10+j} id={i*10+j} className=" flex flex-row w-24 h-24  border-solid border-2 border-slate-600 rounded-sm">{i},{j}</div>
            )
          })}
        </div>)
        }
      )}
    </div>
  );
}

export default App;
