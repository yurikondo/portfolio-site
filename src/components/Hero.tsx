import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Card from "./Card";

interface RotateItem {
  id: string;
  icon: string;
  subTitle: string;
  style?: React.CSSProperties;
}

const Hero: React.FC = () => {
  const [circleRotation, setCircleRotation] = useState(0);

  const rotateItems: RotateItem[] = [
    {
      id: "apple",
      icon: "fa-brands fa-apple",
      subTitle: "beautiful design",
      style: { top: "450px", right: "70px" },
    },
    {
      id: "laptop",
      icon: "fa-solid fa-laptop-code",
      subTitle: "beautiful design",
      style: { top: "100px", left: "340px", transform: "rotate(-90deg)" },
    },
    {
      id: "windows",
      icon: "fa-brands fa-windows",
      subTitle: "beautiful design",
      style: { bottom: "450px", left: "50px", transform: "rotate(-180deg)" },
    },
    {
      id: "iPhone",
      icon: "fa-solid fa-mobile-screen-button",
      subTitle: "beautiful design",
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

  return (
    <main className="-mt-40 w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 relative">
      <div className={`w-screen h-screen absolute -ml-20 ${styles.circleWrap}`}>
        {/* lg:-ml-36 */}
        <div className={`w-0 h-0 ${styles.overray}`}></div>
        <Card />
        <div
          className={`absolute rounded-full top-0 left-20 transition duration-1000 ${styles.circle}`}
          style={{ transform: `rotate(${circleRotation}deg)` }}
        >
          {rotateItems.map((rotateItem) => (
            <div
              className={`feature text-white absolute flex align-middle`}
              style={rotateItem.style}
              key={rotateItem.id}
            >
              <div className="mb-6 lg:mb-0 self-center mr-3">
                <i className={`${rotateItem.icon} text-8xl text-white`}></i>
              </div>
              <div className="ml-5 flex flex-col align-middle h-auto mt-4 ">
                <h1 className="text-3xl">{rotateItem.id}</h1>
                <p className="mt-1">{rotateItem.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
