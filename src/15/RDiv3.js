import { useState, useEffect } from "react";
import TailButton from "../UI/TailButton";
import { AtomN,AtomN2 } from "./AtomN1";
import { useRecoilState, useRecoilValue } from "recoil";
//import { useEffect } from "react";
export default function RDiv3() {

  //const [x,]= useRecoilState(AtomN);
const [x,setX] = useRecoilState(AtomN);
//const [y,setY] = useRecoilState(AtomN2);
const y = useRecoilValue(AtomN2);

  const handleUp = () => {
  
    setX(x + 1);
  }

  const handleDown = () => {
    setX(x - 1);
  }

  useEffect(()=>{
    if(!localStorage.getItem('x'))
      setX(0)
    else
      setX(parseInt(localStorage.getItem('x')));
  },[])

  useEffect(()=>{
    localStorage.setItem('x', x);
  },[x])
  // useEffect(() => {
  //   setY(x*2)
  // }, [x])

  return (
    <div className="w-10/12 h-4/6
    flex flex-col justify-center items-center
    bg-lime-600 text-white font-bold">
      <div className='w-full h-10 p-2 
      flex justify-start items-center'>


        <div className="w-full h-1/2">
          RDiv3: x={x} y={y}
        </div>
        <div className="flex justify-center w-full">
          <TailButton caption='증가'
            color='blue'
            handleClick={handleUp}
            size='w-1/2' />
          <TailButton caption='감소'
            color='orange'
            handleClick={handleDown}
            size='w-1/2' />
        </div>
      </div>
    </div>
  )
}
