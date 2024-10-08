import TailCard from "../UI/TailCard";
import TailButton from "../UI/TailButton";
import { useEffect, useRef } from "react";

export default function Gallary() {
  const x =useRef();

  const handleCancel = ()=>{
    x.current.value ='';
    x.current.focus();
  }
  
  useEffect(()=>{
    x.current.focus();
  },[]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 p-5">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          한국관광공사 사진 정보
        </h1>
        <div className="w-full p-5 bg-blue-50 
                        grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex justify-center  lg:justify-end items-center">
            <input ref={x} type='text' className="w-10/12 form-input"
              id='kw' name='kw' />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <TailButton caption='확인'
              color='blue'
              handleClick=''
              size='w-1/2' />
            <TailButton caption='취소'
              color='blue'
              handleClick={handleCancel}
              size='w-1/2' />
          </div>
        </div>
      </div>

    </div>
  )
}
