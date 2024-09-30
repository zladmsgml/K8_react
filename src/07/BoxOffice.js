import { useEffect, useState } from "react";
import BoxOfficeTr from "./BoxOfficeTr";

export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [trs, setTrs]= useState();
  const getFetchData = () => {

    const apiKey = process.env.REACT_APP_MV_KEY;
    const dt = '20240929'

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${apiKey}&targetDt=${dt}`;

    //데이터 가져오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
      ;
    console.log('apiKey=', apiKey);
    console.log(url);
  }

  // //맨처음 한 번 실행, []아무것도 없을 때,호출하지 않았는데 리액트가 실행, 그실행 시점은 []dependency array에 따른다, []없으므로 실행시 한 번만 실행
  useEffect(() => {
    getFetchData();
  }, []);

  const handleTrClick = (it)

  //fetch 데이터가 채워지면 useEffect가 실행
  useEffect(() => {
    if(!tdata) return;
    console.log('tdata',tdata);
    let tm = tdata.map(item => <BoxOfficeTr
                              handleClick = {()=> handleTrClick(item)}
                              mv={item}
                              key={item.movieCd}/>)
    setTrs(tm);
  }, [tdata])


  return (
    <div className="h-screen flex flex-col justify-center items-center">
     
     <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table
          className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">순위</th>
              <th scope="col" className="px-6 py-4">영화명</th>
              <th scope="col" className="px-6 py-4">매출액</th>
              <th scope="col" className="px-6 py-4">관객수</th>
              
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

      </div>
      )
}
