import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react"

import { Atomn,Atomn2 } from "./Atomn";
import { useRecoilState } from "recoil";

export default function Recoil3({x3,y3}) {
  const[x, setX] = useState(1);
  const[y, setY] = useState(2);
  const inRef= useRef();

  const[n,setN]=useRecoilState(Atomn);
  const[,setN2]=useRecoilState(Atomn2);

  

  const handleUp = () => {
    setX (x+1);
    setN (n+1);
  }

  const handleDown = () => {
    setX (x-1);
    setN (n-1);
  }

  useEffect(()=>{
    setY(x*parseInt(inRef.current.value));
    
  },[x])

  useEffect(()=>{
    setY(x*parseInt(inRef.current.value));
    
  },[n])


  return (
    <div className="w-full h-4/5 
                    mt-10 p-5
                     bg-lime-300 text-black font-bold">
      Recoil3(x={x}, y={y})
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <input type ='number'
                ref={inRef}
                defaultValue={2}
                min={2} max={5}
              className="form-input"/>
        <TailButton caption='증가' color='blue' handleClick={handleUp} size='w-10/12'/>
        <TailButton caption='감소' color='orange' handleClick={handleDown} size='w-10/12'/>
      </div>
    </div>
  )
}
