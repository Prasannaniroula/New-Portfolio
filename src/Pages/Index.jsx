import React from "react";
import { useState, useEffect } from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";

function Index() {
  const arr = ["Full-Stack Developer", "AI enthusiast"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % arr.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* larger screen(desktop/laptop) */}
      <div className="w-full h-screen hidden sm:flex">
        <div className="w-1/2 text-white hidden justify-center items-center sm:flex">
          <div className="flex flex-col gap-14 mt-10">
            <div className="text-4xl font-bold">Hi, I am</div>
            <div className="flex-col gap-4 ">
              <div className="text-6xl font-bold">
                Prasanna Niroula
              </div>
              <div className="text-xl">
                Full-stack developer/AI enthusiast
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#902124] flex justify-center sm:items-center text-white sm:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]">
          <motion.img
            src="front.png"
            className="h-[480px] sm:h-[700px] md:h-[800px] object-contain"
            initial={{ y: "calc(100vw -50%)" }}
            animate={{ y: "calc(0%)" }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
          />
        </div>
      </div>

      {/* smaller screen(mobile devices) */}
      <div className="w-full h-screen lg:hidden md:hidden sm:hidden relative pt-10">
        <div className="w-full  bg-[#902124] flex justify-center text-white rounded-4xl sticky top-0">
          <motion.img
            src="front.png"
            className="h-[500px] object-contain "
            initial={{ y: "calc(100vw -50%)" }}
            animate={{ y: "calc(-36%)" }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
          />
        </div>
        <div className="w-full absolute h-140 bottom-0 [clip-path:polygon(100%_0,100%_0,100%_100%,-1000%_100%)] bg-black pt-20">
          <div className="text-white flex flex-col gap-4 text-center ">
            <div className="text-4xl font-bold">Hi, I am</div>
            <div>
              <div className="text-6xl font-bold">
                <h1>Prasanna Niroula</h1>
              </div>
              <div className="text-xl">
                Full-stack developer/AI enthusiast
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
