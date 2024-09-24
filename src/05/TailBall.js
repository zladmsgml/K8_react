
export default function TailBall({n}) {
  const ballColor = {
    
    'b0' : 'bg-red-800',
    'b1' : 'bg-orange-800',
    'b2' : 'bg-green-500',
    'b3' : 'bg-purple-800',
    'b4' : 'bg-sky-800',
    'b5' : 'bg-yellow-800',



  }
  return (
    <div className={`w-20 h-20 m-5
                    flex justify-center items-center
                    rounded-full
                    
                    ${ballColor['b'+Math.floor(n/10)]}                
                    text-white font-bold text-2xl
                    `}>
      {n}
    </div>
  )
}
