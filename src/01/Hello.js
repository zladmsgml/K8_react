//컴포넌트,사용자 정의 태그 ,jsx 태그, 태그 한 개만 return 
function Hello(){
  let today = new Date();
  today = today.toLocaleString();

  let name ='PNU';
  return(
    <>
    <p className='p1'>
    Hello React!!
    
    </p>
    <p className ='text-4xl text-lime-300'>
   {name === 'PNU' ? '부산대학교 김은희' : '김은희'}
    {/* 삼항연산을 쓸 수 있다./ */} 
    </p>
    <p style={{backgroundColor:'grey', color:'white'}}>
      {/* {new Date().toLocaleString()} */}
      {today}
    </p>
    </>
    //프래그먼트 태그 <></>,  
    // 태그는 하나만 나와야 하는데 p태그가 오류없이 묶어서 나옴
    //class속성은 반드시 className으로 사용
  );
}



export default Hello;
