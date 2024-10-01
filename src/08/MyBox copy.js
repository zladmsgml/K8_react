import { useState, useEffect } from "react";

export default function MyBox() {
  const [BlueFlag, setBlueFlag] = useState(false);
  const [OrangeFlag, setOrangeFlag] = useState(false);

  const handleBlue = () =>{
    setBlueFlag(!BlueFlag);
    console.log('handleBlue =>',BlueFlag)
  }

  const handleOrange = () =>{
    setOrangeFlag(!OrangeFlag);
    console.log('handleOrange =>',OrangeFlag)
  }

  //상태가 바꼈을 때 실행
  useEffect(()=>{
    console.log('useEffect blue =>', BlueFlag)
  },[BlueFlag]);

  useEffect(()=>{
    console.log('useEffect Orange =>', OrangeFlag)
  },[OrangeFlag]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={`w-1/3 ${BlueFlag ?  'bg-blue-600' : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
        <h1 className="flex justify-center items-center
                      text-3xl font-bold text-blue-700                  
                      border border-slate-400 rounded-md
                      p-5 m-5">
          Blue
        </h1>
        <div className="flex justify-center items-center
                      text-xl font-bold                      
                      border border-blue-400 bg: bg-blue-100
                      p-5 m-5"
             onClick={handleBlue}>
          Blue Toggle
        </div>
      </div>
      <div className={`w-1/3 ${OrangeFlag?  'bg-orange-600':''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
        <h1 className="flex justify-center items-center
                      text-3xl font-bold text-orange-700                  
                      border border-slate-400 rounded-md
                      p-5 m-5">
          orange
        </h1>
        <div className="flex justify-center items-center
                      text-xl font-bold                      
                      border border-orange-400 bg: bg-orange-100
                      p-5 m-5"
             onClick={handleOrange}>
          orange Toggle
        </div>
      </div>
    </div>
  )
}
