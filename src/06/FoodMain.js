import fooddata from './fooddata.json';
import FoodCard from './FoodCard';
import { useState } from 'react';
import TailButton from '../UI/TailButton';

export default function FoodMain() {
  const [tags, setTags] =useState();
  
  //운영주체 분류를 중복 제거하여 버튼으로 만들기
  let tm = fooddata.map(item => item["운영주체 분류"].replace(' ',''));
  tm = [...new Set(tm)];  //중복제거, map을 쓸수 없다 ...전개연산자:하나씩 배열로

  const bts = tm.map(item => <TailButton
                        key = {item}
                        caption = {item}
                        color = 'blue'
                        handleClick = {()=>handleFood(item)}
                      />);
  console.log(tm)

  const handleFood = (item) =>{
    let tm = fooddata.filter(i => i["운영주체 분류"].replace(" ", '')=== item)
                      .map(i => <FoodCard obj={i} key={i.사업장명}/>)
    setTags(tm);
    
  }
  return (
    <div className='w-full flex flex-col justify-start h-screen'>
      <div className='w-full h-20 bg-blue-100 flex justify-center p-3'>
        {bts}
      </div>
    <div className='w-full overflow-auto grid grid-cols-1 xl:grid-cols-2 gap-4 p-4'>
      {tags}
    </div>
    </div>
  )
}
