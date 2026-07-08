import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import HomeView from "./views/HomeView";
import Sub1 from "./views/Sub1";
import link from './views/link'


function App() {
  
  useEffect(()=>{
    link();
  },[])
  //[]: 한번만 실행
  //useEffect : 컴포넌트가 렌더링 된 후 해야 할 일을 작성하는

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/sub1" element={<Sub1 />}/>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
