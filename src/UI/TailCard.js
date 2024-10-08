export default function TailCard({ imgUrl, title, content, kw }) {
  // let kws = '';
  // if(kw.includes(',')){
  //   kws = kw.split(',')
  // }
  // else{
  //   kws.push(kw);
  // }

  const kws = kw.includes(',')? kw.split(',')
                             : [kw]
  const kwTags = kws.map(item => <span key={item}
                                        className="inline-flex text-xs bg-slate-200 p-1 rounded-md m-2">
                                          {item}
                                 </span>)
  console.log(kws)


  return (
    <div>
      <div className="max-w-sm bg-white border
                     border-gray-200 rounded-lg shadow">

        <img className="rounded-t-lg"
          src={imgUrl}
          alt="" />

        <div className="p-5">

          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>

          <p className="mb-3 font-normal text-gray-700">
            {content}
          </p>

          <p className="mb-3 font-normal text-gray-700">
            {kwTags}
          </p>

          {/* <p className="mb-3 font-normal text-gray-700">
            {word.map((word, index) => (
              <span key={index} className="border rounded-md bg-slate-200 text-xs m-1"> 
                {word.replaceAll(',','')}  
              </span>
            ))}
          </p> */}

        </div>
      </div>

    </div>
  )
}
