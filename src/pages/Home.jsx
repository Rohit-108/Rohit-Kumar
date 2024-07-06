
import { useEffect, useState } from "react";
import { Navbar } from '../components';
import {Leftsection} from '../components';
import {Rightsection} from '../components';
import {Main} from '../components';
import {About} from "../components";
import {Projects} from "../components"


const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const scrollTop = document.documentElement.scrollTop;
      const scrollLeft = document.documentElement.scrollLeft;
      setPosition({ x: clientX + scrollLeft, y: clientY + scrollTop });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="flex flex-col w-full  h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden min-h-screen relative">
      <div
        className="pointer-events-none inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      <Navbar />
      <Leftsection />
      <Rightsection />
      <div id="content" className="">
        <main className="px-[25px] sm:px-[50px] py-0 md:px-[100px] lg:px-[150px] my-0 mx-auto w-full max-w-[1600px] min-h-screen">
          <Main />
          <About />
          <Projects/>
        </main>
      </div>
    </div>
  );
}

export default Home