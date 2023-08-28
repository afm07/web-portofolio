import { useEffect, useState } from "react";
import './App.css'
import Navbar from './component/Navbar'
import { InfinitySpin } from "react-loader-spinner";
import Hero from "./component/Hero";
import About from "./component/About";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      {
        loading ?
          <div className="backgroundColors h-[100vh] flex justify-center items-center">
            <InfinitySpin
              height={100}
              width='200'
              color="#0055CC"
            />
          </div>
          :

          <div>
            <Navbar />
            <div className="backgroundColors w-full overflow-x-hidden">
              <Hero />
              <About />
            </div>
          </div>
      }
    </>
  );
};

export default App
