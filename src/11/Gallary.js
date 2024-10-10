import TailCard from "../UI/TailCard";
import TailButton from "../UI/TailButton";
import { useEffect, useRef, useState } from "react";

export default function Gallary() {
  
  const [tdata, setTdata] = useState();
  const [tags,setTags] = useState([]);
  

  const x =useRef();

  const getFetchData = async () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const keyword = encodeURI(x.current.value);
    console.log(x.current.value);

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = `${url}serviceKey=${apiKey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = `${url}&keyword=${keyword}&_type=json`
    console.log(url);

    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
    //   ;
    
    const resp = await fetch(url);
    const data = await resp.json();
    
    console.log("getFetch:",data.response.body.items.item);
    setTdata(data.response.body.items.item)
  }

  const handleOk = () =>{
    if (x.current.value ==='') {
      alert("키워드를 입력해 주세요");
      x.current.focus();
      return;
    }

    getFetchData();
  }

  const handleCancel = ()=>{
    x.current.value ='';
    x.current.focus();
    setTags([]);
  }
  
  useEffect(()=>{
    x.current.focus();
  },[]);

  useEffect(() => { 
    if (!tdata) return;
    const tm = tdata.map(item => <TailCard 
                              key={item.galContentId}                              
                              imgUrl={item.galWebImageUrl}
                              title={item.galTitle}                              
                              content={item.galPhotographyLocation}
                              kw={item.galSearchKeyword}
                             />)
    setTags(tm)
    
  }, [tdata])

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-10/12 p-5">
        <h1 className="w-full flex justify-center text-3xl mb-5">
          한국관광공사 사진 정보
        </h1>
        <div className="w-full p-5 bg-blue-50 
                        grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex justify-center  lg:justify-end items-center">
            <input ref={x} type='text' className="w-10/12 form-input"
              id='kw' name='kw' />
          </div>
          <div className="flex justify-center lg:justify-start items-center">
            <TailButton caption='확인'
              color='blue'
              handleClick={handleOk}
              size='w-1/2' />
            <TailButton caption='취소'
              color='blue'
              handleClick={handleCancel}
              size='w-1/2' />
          </div>
        </div>
      </div>
      <div className="w-10/12 p-5 grid grid-cols-1 grid-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {tags}
      </div>

    </div>
  )
}
