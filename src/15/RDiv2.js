import { AtomN, AtomN2 } from './AtomN1';
import { useRecoilValue } from 'recoil';

export default function MyDiv2() {
  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);
  //console.log(probs)
  return (
    <div className="w-full h-4/6
                    flex flex-col justify-center items-center
                    bg-lime-600 text-white font-bold">
      <div className='w-full h-10 p-2 
                      flex justify-start items-center'>
        RDiv2 : x={x} y ={y}
      </div>
       

    </div>
  )
}