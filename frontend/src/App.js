import { Outlet } from 'react-router';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css"
import "./pages/UpperHeader.jsx"
import { UpperHeader } from './pages/UpperHeader.jsx';
import { Footer } from './pages/Footer_.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  // useeffect for aos-animation 

  useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 100,
      easing : 'ease-in-out',
      delay : 100
    })
  },[])
  return (
    <div className="App">
      <ToastContainer/>
      <UpperHeader/>
      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
      {/* <Footer/> */}
      <Footer/>
    </div>
    
    
  );
}

export default App;
