
export default function BoxOfficeTr({handleClick, mv }) {
  return (
    <tr onClick={handleClick} className="border-b border-neutral-200 dark:border-white/10">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{mv.rank}</td>
      <td className="whitespace-nowrap px-6 py-4">{mv.movieNm}</td>
      <td className="whitespace-nowrap px-6 py-4">{parseInt(mv.salesAmt).toLocaleString}</td>
      <td className="whitespace-nowrap px-6 py-4">{parseInt(mv.audiCnt).toLocaleString}</td>
      <td className="whitespace-nowrap px-6 py-4">{ mv.rankInten > 0? <span>▲</span>:
                                                    mv.rankInten < 0? <span></span>: "-"}
                                                    {Math.abs(mv.rankInten)}</td>

    </tr>

  )
}
