import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import getcode from "./getcode.json";

export default function FcstList() {
  //목록 만들기
  const [ops,setOps] = useState();
  const [tdata, setTdata] = useState();
  const [trs,setTrs] = useState([]);

  //form값 참조위한 ref변수
  const selRef = useRef();

  const sky ={'1': '맑음(🌞)', '3':'구름많음(☁)','4':'흐림(🌫)'}
  const pty ={'0': '없음', '1':'비','2':'비/눈', '3':'눈', '4':'소나기'}
    

  const [sParams]= useSearchParams();


  const gubun = sParams.get('gubun') ;
  const dt = sParams.get('dt') ;
  const year=dt.substring(0,4);
  const mon=dt.substring(4,6);
  const day=dt.substring(6,8);
  const dt1 = [year, mon, day].join('-');
  console.log(dt1);

  const x = sParams.get('X') ;
  const y = sParams.get('Y') ;
  const area = sParams.get('area') ;
  console.log(gubun, dt, x, y, area) ;


  const apiKey = process.env.REACT_APP_API_KEY;


  const handleSelect = () =>{
    console.log(selRef.current.value);
    if(!tdata) return;

    const code = getcode.filter(item => item['항목값'] === selRef.current.value)[0];
    console.log('code', code)
    const tm = tdata.filter(item => item["category"] === selRef.current.value);
    console.log(tm);

    let tm1 = tm.map(item => <tr key={item.category + item.fcstDate + item.fcstTime}>
      <td>{code.항목명}({item.category})</td>
      <td>{item.fcstDate.slice(0,4)}-{item.fcstDate.slice(4,6)}-{item.fcstDate.slice(6,8)}</td>
      <td>{item.fcstTime.slice(0,2)}:{item.fcstTime.slice(2,4)}</td>
      <td>
        {item.category ==='SKY'? sky[item.fcstValue] : item.category==='PTY'? pty[item.fcstValue]: item.fcstValue +code.단위}
        
          
      </td>
    </tr>)
    setTrs(tm1);
  }

  const getFetchData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data.response.body.items.item);
    setTdata(data.response.body.items.item);
  }
  //컴포넌트 생성 시
  useEffect(() =>{
    const tm = getcode.filter(item => item.예보구분 === gubun);
    const tm1 = tm.map(item => <option key={item.항목값} value={item.항목값}>
                                  {item.항목명}({item.항목값}) 
                                 </option>)
    console.log(tm1)
    setOps(tm1);

    let url ='';
    if(gubun === "단기예보"){
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
      url = `${url}serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
    
    }
    else{
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
      url = `${url}serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
    }
    console.log("url",url);

    getFetchData(url);
  },[])

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 
                      gap-2 md:gap-4 my-5">
        <h1 className="w-full text-left text-3xl font-bold">
          {area}{gubun}({dt1})
        </h1>
        <select className="form-select"
                ref={selRef}
                onChange={handleSelect}>
          <option value=''>항목을 선택하세요</option>
          {ops}
        </select>

      </div>
      <div className="w-10/12">
      <table
                className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead
                  className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">항목명</th>
                    <th scope="col" className="px-6 py-4">예측일자</th>
                    <th scope="col" className="px-6 py-4">예측시간</th>
                    <th scope="col" className="px-6 py-4">예측값</th>         

                  </tr>
                </thead>
                <tbody>
                  {trs}
                </tbody>
             
              </table>
      </div>

    </div>
  )
}
