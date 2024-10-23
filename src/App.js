import './App.css';
import Hello from './01/Hello';
import MyClock from './02/MyClock';
import { ImHome } from "react-icons/im";
import MyDiv1 from './03/MyDiv1';
import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import FoodCard from './06/FoodCard';
import BoxOffice from './07/BoxOffice';
import MyBox from './08/MyBox';
import TrafficMain from './09/TrafficMain';
import MyRef from './10/MyRef';
import Gallary from './11/Gallary';
import Festival from './12/Festival';
import RouteMain from './13/RouteMain';
import RMain from './15/RMain';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"
import Fcst1 from './14/Fcst1';
import FcstList from './14/FcstList';
import Rest from './16/Rest';

function App() {
  
  return (
    <BrowserRouter>
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-400
                         '>
          <p className='text-2xl font-bold p-5'>
            K-digital 8기
          </p>
          <ul className='flex justify-center items-center gap-8 text-2xl'>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/clock'>시계</Link></li>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/lotto'>로또생성기</Link></li>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/food'>푸드뱅크</Link></li>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/movie'>박스오피스</Link></li>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/traffic'>교통사고</Link></li>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/gallary'>관광</Link></li>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/fes'>축제</Link></li>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/fcst'>일기예보</Link></li>
            <li className='hover:bg-blue-400 hover:text-white rounded-md'>
            <Link to='/rest'>Restfull</Link></li>
          </ul>
          <p className='text-4xl font-bold p-5'> 
            <Link to='/home'><ImHome /> </Link>
          </p>             

      </header>
      
      <main className='w-full grow
                       flex flex-col justify-start items-center
                       overflow-y-auto'>
          <Routes>
            <Route path="/clock" element = {<MyClock/>}/>
            <Route path="/lotto" element = {<Lotto/>}/>
            <Route path="/food" element = {<FoodMain/>}/>
            <Route path="/movie" element = {<BoxOffice/>}/>
            <Route path="/traffic" element = {<TrafficMain/>}/>
            <Route path="/gallary" element = {<Gallary/>}/>
            <Route path="/fes" element = {<Festival/>}/>
            <Route path="/fcst" element = {<Fcst1/>}/>
            <Route path="/fcstlist" element = {<FcstList/>}/>
            <Route path="/mydiv" element = {<MyDiv1/>}/>
            <Route path="/rmain" element = {<RMain/>}/>
            <Route path="/rest" element = {<Rest/>}/>
            <Route path="/home" element = {<ImHome/>}/>
          </Routes>
      </main>
      <footer className='w-full h-20
                         flex justify-center items-center
                         bg-black text-white'>
          <p>K-digital 8기 김은희</p>
      </footer>
     
    </div>
    </BrowserRouter>
  );
  
}

export default App;

