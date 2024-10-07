import { useState, useEffect } from "react";
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
  //전체 데이터
  const [tdata, setTdata] = useState([]);

  //대분류 데이터
  const[c1,setC1]= useState([]);
  const[selC1,setSelC1]=useState([]);

  //사고유형 데이터
  const[c2,setC2]= useState([]);
  const[selC2,setSelC2]=useState([]);

  //정보 추출
  const [info, setInfo]=useState([]);

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
    tm = [...new Set(tm)];//중복제거
    console.log('tm=',tm)
    //대분류생성
    setC1(tm);
  },[tdata])

  //대분류 선택
  useEffect(()=>{
    console.log(selC1)
    let tm1 = tdata.filter(item => item['사고유형대분류']==selC1); 
    tm1 = tm1.map(item => item['사고유형'])
    setC2(tm1)
    setInfo("")
    //console.log('tm1=',tm1)
    //setSelC1(tm1)
  },[selC1])

  //사고유형 선택
  useEffect(()=>{
    if(!selC1 || !selC2)
      return;
    let tm = tdata.filter(item =>  item['사고유형대분류']==selC1 &&
                                   item['사고유형']==selC2); 
    tm = tm[0];   
    console.log(tm);                           
    const infoKey = ['사고건수','사망자수','중상자수','경상자수','부상신고자수'];
    let tmk = infoKey.map((k,idx) =><div key={tm['사고유형대분류']+ tm['사고유형']+idx}
                            className="flex justify-center items-center">
                              <div>{k}</div>
                              <div>{parseInt(tm[k]).toLocaleString()}</div>
                              </div>);  
    setInfo(tmk)                         
    
  },[selC2])

  return (
    <div className="w-full p-5 h-full flex-col items-start m-5 justify-center">
      {c1&&<TrafficNav title='대분류' c={c1} sel={selC1} setSel={setSelC1}/>}
      {c2&&<TrafficNav title='중분류' c={c2} sel={selC2} setSel={setSelC2}/>}
    <div className="grid grid-cols-5">
      {info}
    </div>
    </div>
  )
}
