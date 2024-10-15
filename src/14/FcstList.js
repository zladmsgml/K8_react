import { useSearchParams } from "react-router-dom"
export default function FcstList() {
  const [sParams]= useSearchParams();


  const gubun = sParams.get('gubun') ;
  const dt = sParams.get('dt') ;
  const x = sParams.get('x') ;
  const y = sParams.get('y') ;
  const area = sParams.get('area') ;
  console.log(gubun, dt, x, y, area) ;
  const apiKey = process.env.REACT_APP_API_KEY;
  const getFetchData = () => {

    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
    url = `serviceKey={apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20241015&base_time=0630&nx=55&ny=127`;
    console.log(url);

    //데이터 가져오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch(err => console.log(err))
      ;
 
  }


  return (
    <div>
      일기예보
    </div>
  )
}
