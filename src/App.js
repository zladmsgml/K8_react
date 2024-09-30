
import './App.css';
// /import Hello from './01/Hello';
//import MyClock from './02/MyClock';
import { ImHome } from "react-icons/im";
// import MyDiv1 from './03/MyDiv1';
//import MyList from './04/MyList';
//import Lotto from './05/Lotto';
//import FoodMain from './06/FoodMain';
//import FoodCard from './06/FoodCard';
import BoxOffice from './07/BoxOffice';


function App() {
  return (
    <div className="w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center">
      <header className='w-full h-20
                         flex justify-between items-center
                         bg-slate-400
                         '>
          <p className='text-2xl font-bold p-5'>
            K-digital 8기
          </p>
          <p className='text-4xl font-bold p-5'> 
            <ImHome /> 
          </p>             

      </header>
      
      <main className='w-full grow
                       flex flex-col justify-center items-center
                       overflow-y-auto'>
          {/* <MyDiv1/> */}
          {/* <MyList/> */}
          {/* <Lotto /> */}
          {/* FoodMain
          <FoodMain/> */}
          <BoxOffice/>
       
      </main>
      <footer className='w-full h-20
                         flex justify-center items-center
                         bg-black text-white'>
          <p>K-digital 8기 김은희</p>
      </footer>
     
    </div>
  );
}

export default App;

