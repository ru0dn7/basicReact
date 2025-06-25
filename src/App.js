import './App.css';
// import logo from './logo.svg';
// import Hello from "./01/Hello"
// import MyClock from './02/MyClock';
import MyDiv1 from './03/MyDiv1';
import { RiHomeHeartFill } from 'react-icons/ri';

function App() {
  return (
    // tailwind - flex box이고, 수직정렬, 넓이와 높이는 화면 전체, mx-auto: 수평 중앙정렬
    <div className="flex flex-col w-full h-screen mx-auto">
      {/* 수평정렬flex-row는 default */}
      <head className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
        <p>React 기초</p>
        <p><RiHomeHeartFill /></p>
      </head>

      {/* grow : header와 footer 외 모든영역 사용 */}
      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        <MyDiv1 />
      </main>

      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        ⓒ Kim kyoung Wook
      </footer>
    </div>    
  );
}

export default App;
