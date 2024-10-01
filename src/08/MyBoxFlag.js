import { useState, useEffect } from "react";

export default function MyBoxFlag({color}) {
  const [Flag, setFlag] = useState(false);

  const colorObj = {
    'blue' : {
      'bg500' : 'bg-blue-500',
      'text700' : 'text-blue-700',
      'border600' : 'border-blue-600',
    },
    'orange' : {
      'bg500' : 'bg-orange-500',
      'bg50' : 'bg-orange-50',
      'text700' : 'text-orange-700',
      'border600' : 'border-orange-600',
    }
  }

  const obj =colorObj[color];
  
  const handleClick = () => {
    setFlag(!Flag);
    console.log('handleClick =>', Flag)
  }

  //상태가 바꼈을 때 실행
  useEffect(() => {
    console.log('useEffect =>', Flag)
  }, [Flag]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={`w-1/2 ${Flag ? obj['bg500'] : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
        <h1 className={`flex justify-center items-center
                      text-3xl font-bold text-${color}-700                 
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
          {color}
        </h1>
        <div className={`flex justify-center items-center
                      text-xl font-bold                      
                      border border-${color}-400 bg: bg-${color}-100
                      p-5 m-5`}
          onClick={handleClick}>
          {color} Toggle
        </div>
      </div>
    </div>
  )
}
