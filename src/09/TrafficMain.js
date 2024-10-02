import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
  //전체 데이터
  const [tdata, setTdata] = useState([]);
  const getFetchData = () => {

    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;
    console.log(url);

    //데이터 가져오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch(err => console.log(err))
      ;
 
  }

  //맨처음 한 번
  useEffect(()=>{
    getFetchData();
  },[]);

  //tdata가 변경되었을 때
  useEffect(()=>{
    if(!tdata) return;
    console.log(tdata)
    let tm = tdata.map(item => item['사고유형대분류']); //{return item['사고유형대분류']} map은 배열만 돌 수 있다
    tm = [...new Set(tm)];
    console.log('tm=',tm)
  },[tdata])

  return (
    <div className="w-full h-full flex items-start m-5 justify-center">
      
      <TrafficNav/>
    </div>
  )
}
