import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

interface RotateItem {
  id: string;
  subTitle: string;
  style?: React.CSSProperties;
}

const Hero: React.FC = () => {
  const [circleRotation, setCircleRotation] = useState(0);

  const rotateItems: RotateItem[] = [
    {
      id: "apple",
      subTitle: "beautiful design",
      style: { top: "450px", right: "70px" },
    },
    {
      id: "desktop",
      subTitle: "beautiful design",
      style: { top: "100px", left: "340px", transform: "rotate(-90deg)" },
    },
    {
      id: "windows",
      subTitle: "beautiful design",
      style: { bottom: "450px", left: "50px", transform: "rotate(-180deg)" },
    },
    {
      id: "iphone",
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
    <main className="-mt-6 w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 relative">
      <div className={`w-screen h-screen absolute -ml-20 ${styles.circleWrap}`}>
        {/* lg:-ml-36 */}
        <div className={`w-0 h-0 ${styles.overray}`}></div>
        <Image
          src="/imgs/hero/pc.png"
          className={`absolute top-2/4 z-10 w-16 ${styles.pc}`}
          alt="PC"
          width={100}
          height={100}
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
