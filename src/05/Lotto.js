import TailButton from "../UI/TailButton"
import TailBall from "./TailBall"

export default function Lotto() {
  const handleClick = () => {
  
      let arr = [];
      while (arr.length < 7) {
        let n = Math.floor(Math.random() * 45) + 1; //1~45
        if (!arr.includes(n)) arr.push(n);//n이 배열에 포함되어 있지 않다면 배열에 넣는다.
      }
      console.log('handleClick', arr)
    }

  const num = arr.map( item => <TailBall
                                n={item}/>);
  


  return (
    <div className="w-full">
      <div className="flex justify-center items-center mb-10">
        <TailBall n={10} />
        <TailBall n={20} />
        <TailBall n={25} />
        <TailBall n={5} />
        <TailBall n={30} />
        <TailBall n={45} />


      </div>
      <div>
        <TailButton caption={'로또번호생성'} color='blue' handleClick={handleClick} />


      </div>
    </div>
  )
}
