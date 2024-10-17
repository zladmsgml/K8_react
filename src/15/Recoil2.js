import { Atomn } from "./Atomn";
import { useRecoilState } from "recoil";

//export default function Recoil2(props) {
  export default function Recoil2({y2}) {
    const n =useRecoilState(Atomn);

  return (
    <div className="w-1/3 h-4/5 flex flex-col
                    mt-10 p-5 mx-2
                     bg-lime-500 text-white font-bold">
      
      Recoil2({y2},{n})
    </div>
  )
}
