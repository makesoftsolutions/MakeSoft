import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Approutes from './routes';
import { useState,useEffect } from 'react';


function AppContent() {
  const location = useLocation();
  const [mobile,setmobile] = useState(window.innerHeight > window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setmobile(window.innerHeight > window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header titles={["Quem somos", "Objetivos", "Serviços", "Contato"]} path={location.pathname} mobile={mobile}/>
      <Approutes mobile={mobile}/>
      <Footer mobile={mobile} gmail="gmail@gmail.com" instagram="@instagram" linkedin="linkedin"/>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
