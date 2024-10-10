import { useEffect, useState, useRef } from "react";

export default function Festival() {
  const [tdata, setTdata]=useState([]);
  const [gunm,setGunm]=useState([]);
  const [selgu,setSelgu]= useState();

  const gu = useRef();

  const getFetchData = async () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    // const keyword = encodeURI(x.current.value);
    // console.log(x.current.value);

    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = `${url}serviceKey=${apiKey}&pageNo=1&numOfRows=40&resultType=json`;
    
    console.log(url);

    //fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
    //   ;
    
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data);
    
    console.log("getFetch:", data.getFestivalKr.item);
    setTdata(data.getFestivalKr.item)
  }

  const handleSelect = () =>{
    console.log(gu.current.value)
  }

  useEffect(()=>{
    getFetchData();
    // const tm = data.map(item => item.GUGUN_NM)
    // console.log(tm);
  },[])

  useEffect(()=>{
    let tm = tdata.map(item => item.GUGUN_NM)
    tm = [...new Set(tm)].sort()
    console.log(tm);
    setGunm(tm)

    tm = tm.map(item => <option key={item}
                                value={item}>
      {item}
    </option>)
    setGunm(tm)
  },[tdata])

  
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-10/12 p-5">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          부산축제정보
        </h1>
        <div className="w-full p-5 bg-blue-50 
                      grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="w-10/12 p-5 flex justify-center items-center">
            <select className="w-1/2 form-select" ref={gu} onChange={handleSelect}>
              <option value="">---구를 선택하세요---</option>
             {gunm}
            </select>
            
          </div>

        </div>
      </div>
      {/* <div className="w-10/12 p-5 grid grid-cols-1 grid-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {tags}
      </div> */}

    </div>
  )
}
