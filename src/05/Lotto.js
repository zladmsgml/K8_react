import TailButton from "../UI/TailButton"
import TailBall from "./TailBall"

import { useState } from "react";


export default function Lotto() {
  //state변수는 useState Hook으로 만듦
  const [tags, setTags] = useState();

  const handleClick = () => {
        let arr = [];

        while(arr.length < 7){
        let n = Math.floor(Math.random() * 45) + 1; //1~45

        if(!arr.includes(n)) arr.push(n) ;
        }

        //보너스 번호
        const bonus = arr.splice(-1);
        //번호 정렬
        arr.sort((a,b) => a-b);
        //보너스 번호 추가
        arr = arr.concat(bonus);
        //볼만들기
        let tm = arr.map(item => <TailBall  key={'b'+item}
                                            n={item}/>);
        //플러스 기호 넣기
        tm.splice(6,0, <div className="text-3xl mx-2 font-bold" key="sp">+</div>)
        console.log(tm)
       setTags(tm);
        
    }



  return (
    <div className="w-full">
      <div className="flex justify-center items-center mb-10">
      
        {tags}
      </div>
      <div className="w-full flex justify-center items-center mb-10">
        <TailButton caption={'로또번호생성'} color='blue' handleClick={handleClick} />


      </div>
    </div>
  )
}
