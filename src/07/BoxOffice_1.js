import { useEffect, useState } from "react";
import TailButton from '../UI/TailButton';

export default function BoxOffice() {
  const [cnt, setCnt] = useState(0);
  const handleUp = () => {
      setCnt(cnt+1);
  }
  const handleDown = () => {
    setCnt(cnt-1);
  }
  // //맨처음 한 번 실행, []아무것도 없을 때,호출하지 않았는데 리액트가 실행, 그실행 시점은 []dependency array에 따른다, []없으므로 실행시 한 번만 실행
  useEffect(()=>{
    console.log('useEffect []');
    setCnt(100);
  }, []);
    
  // //state 변수 cnt가 변경이 될 때, cnt바뀔 때 마다 실행
  useEffect(()=>{
    console.log('useEffect [cnt]',cnt)
  },[cnt]);
  
  //변경이 일어 날 때 마다 실행
  useEffect(()=>{
    console.log('useEffect');
     });
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center m-5 text-3xl">
        {cnt}
      </div>
      <div>
      <TailButton caption='증가'
                  color='blue'
                  handleClick={handleUp}/>
      
      <TailButton caption='감소'
                  color='blue'
                  handleClick={handleDown}/>
      </div>
    </div>
  )
}
