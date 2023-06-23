import React from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Card = () => {
  return (
    <div
      className={`border-solid border-2 border-sky-500 rounded-xl shadow-lg w-80 h-96 bg-black absolute top-60 z-10 ${styles.phone}`}
      data-tilt
      // data-tilt-glare="true"
      // data-tilt-max="1"
    >
      <Image
        alt="スマホの画像"
        src="/imgs/hero/screenshot.png"
        width={300}
        height={150}
      />
    </div>
  );
};

export default Card;
