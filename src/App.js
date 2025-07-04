import './App.css';
import { RiHomeHeartFill } from 'react-icons/ri';
// import logo from './logo.svg';
// import Hello from "./01/Hello"
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
import Traffic from './06/Traffic';

function App() {
  return (
    // tailwind - flex box이고, 수직정렬, 넓이와 높이는 화면 전체, mx-auto: 수평 중앙정렬
    <div className="flex flex-col w-full h-screen mx-auto">
      {/* 수평정렬flex-row는 default */}
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
        <p>React 기초</p>
        <p>
          <RiHomeHeartFill />
        </p>
      </header>

      {/* grow : header와 footer 외 모든영역 사용 */}
      <main className="grow w-full flex justify-center items-center overflow-y-auto">
        {/* <MyClock /> */} {/* 02폴더 강의 */}
        {/* <MyDiv1 /> */} {/* 03폴더 강의 */}
        {/* <MyList /> */} {/* 04폴더 강의 */}
        {/* <Lotto /> */} {/* 05폴더 강의 */}
        <Traffic />  {/* 06폴더 강의 */}
      </main>

      <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
        ⓒ Kim kyoung Wook
      </footer>
    </div>
  );
}

export default App;
