
import TailButton from "../UI/TailButton"
import {useState, useRef, useEffect} from "react";
export default function MyRef() {
  const [valS,setValS]= useState(0);

  const valR = useRef(0);
  const x = useRef();
  const y = useRef();
  const z = useRef();
  
  //컴포넌트 변수
  let valC = 0;

  const handleBClick = () => {
    valC = valC + 1;
    console.log('valC =', valC);
  }
  const handleSClick = () => {
    setValS(valS+1)
  }
  const handleRClick = () => {
    valR.current = valR.current + 1;
    console.log('valR=', valR)
  }
  const handleAdd = () => {
    if(x.current.value == ''){
      alert('값을 입력하세요');
      y.current.focus();
      return;
    }
    z.current.value = parseInt(x.current.value) + parseInt(y.current.value) ;
  }

  const handleFocus =()=>{
    z.current.value = '';
  }

  useEffect(()=>{
    x.current.focus();
  },[]);

  return (
    <>
    <div className="w-3/5 grid grid-cols-3 gap-2">
      <div className="text-xl font-bold text-blue-800">
        컴포넌트 변수 :{valC}
      
      </div>
      <div className="text-xl font-bold text-orange-800">
        State 변수 :{valS}
      
      </div>
      <div className="text-xl font-bold text-lime-800">
        Ref 변수 : {valR.current}
      
      </div>
      <div>
        <TailButton caption={'컴포넌트변수'} color='blue' handleClick={handleBClick} />
      </div>
      <div>
        <TailButton caption={'State변수'} color='orange' handleClick={handleSClick} />
      </div>
      <div>
        <TailButton caption={'Ref변수'} color='blue' handleClick={handleRClick} />
      </div>
    </div>
    <div className="w-3/5 grid grid-cols-5 gap-2 p-2 bg-slate-200">
      <div className="flex justify-center items-center text-center">
        <input ref={x} type="number" id="txt1" name='txt1' className="h-10 w-24"
          />
      </div>
      <div className="text-2xl font-bold text-center">
        +
      </div>
      <div>
        <input ref={y} type="number" id="txt1" name='txt1' className="h-10 w-20"/>
      </div>
      <div>
        <TailButton caption='='
                    color = 'orange'
                    handleClick={handleAdd}/>
                    
      </div>
      <div>
      <input ref={z} type='number' id='txt3' name='txt3' readOnly className="h-10 w-24" />
      </div>
    </div>
    </>
    
  )
}
