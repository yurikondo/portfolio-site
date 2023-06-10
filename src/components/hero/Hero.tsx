import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

interface RotateItem {
  id: string;
  style?: React.CSSProperties;
}

const Hero: React.FC = () => {
  const [circleRotation, setCircleRotation] = useState(0);

  const rotateItems: RotateItem[] = [
    { id: "battery", style: { top: "450px", right: "70px" } },
    {
      id: "camera",
      style: { top: "100px", left: "340px", transform: "rotate(-90deg)" },
    },
    {
      id: "display",
      style: { bottom: "450px", left: "50px", transform: "rotate(-180deg)" },
    },
    {
      id: "processor",
      style: { bottom: "150px", right: "370px", transform: "rotate(90deg)" },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCircleRotation((prevRotation) => prevRotation + 90);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClickUp = () => {
    setCircleRotation((prevRotation) => prevRotation - 90);
  };

  const handleClickDown = () => {
    setCircleRotation((prevRotation) => prevRotation + 90);
  };

  return (
    <main className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 relative">
      <div className="w-screen h-screen absolute -ml-20">
        <div className={`w-0 h-0 ${styles.overray}`}></div>
        <img
          src="imgs/hero/pc.png"
          className={`absolute top-2/4 z-10 w-16 ${styles.pc}`}
          alt="PC"
        />
        <div
          className={`absolute rounded-full top-0 left-0 transition duration-1000 ${styles.circle}`}
          style={{ transform: `rotate(${circleRotation}deg)` }}
        >
          {rotateItems.map((rotateItem) => (
            <div
              className={`feature text-white absolute flex`}
              style={rotateItem.style}
              key={rotateItem.id}
            >
              <img src={`imgs/circle/${rotateItem.id}.png`} alt="画像" />
              <div className="ml-5">
                <h1 className="text-3xl">{rotateItem.id}</h1>
                <p className="mt-1">Beautiful processor</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute top-2/4 flex justify-center items-center flex-col transform -translate-y-1/2  ${styles.controle}`}
      >
        <img
          src="imgs/hero/arrow.png"
          alt="上矢印"
          className="cursor-pointer w-4"
          onClick={handleClickUp}
        />
        <h3 className="text-white my-3">Feature</h3>
        <img
          src="imgs/hero/arrow.png"
          alt="下矢印"
          className="cursor-pointer w-4 transform -rotate-180"
          onClick={handleClickDown}
        />
      </div>
    </main>
  );
};

export default Hero;
