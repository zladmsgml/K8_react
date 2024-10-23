import RDiv2 from './RDiv2';
import RDiv3 from './RDiv3';
import { AtomN, AtomN2 } from './AtomN1';
import { useRecoilValue } from 'recoil';

export default function RDiv1() {
  const x = useRecoilValue(AtomN);
  const y = useRecoilValue(AtomN2);
  return (
    <div className="w-4/6 h-4/6
                      flex flex-col justify-center items-center
                      bg-lime-800 text-white font-bold">
      <div className='w-full h-10 p-2 m-2
                        flex justify-start items-center'>
        RDiv1: x ={x} y ={y};
        </div>
        <div className='w-full grid grid-cols-2 gap-4 place-items-center'>
        <RDiv2/>
        <RDiv2/>
        </div>
        <div className='w-full h-1/2 flex justify-center items-center'>
        <RDiv3/>
       
        </div>
    </div>
  
  )
}

