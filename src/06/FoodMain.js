import fooddata from './fooddata.json'
import FoodCard from './FoodCard'

export default function FoodMain() {
  console.log(fooddata)
  return (
    <div>
      <div className='w-full h-full
                      border border-gray-300
                      flex justify-center items-center'>

        <div className='w-1/3 flex justify-start items-start'>
          <img/>이미지
        </div>
        <div className='w-2/3 h-full p-5 flex flex-col justify-start items-center'>
          <div className="flex flex-col  h-3/4">
            <div className="text-2xl font-bold mb-2">
              사업장명
            </div>
            <div className="text-sm">
            사업장 소재지
            </div>
            <div className="text-sm">
            연락처
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
