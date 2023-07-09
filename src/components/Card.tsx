import React from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Card = () => {
  return (
    <div
      className={`rounded-xl shadow-lg  absolute z-10 ${styles.phone}`}
      data-tilt
      // data-tilt-glare="true"
      // data-tilt-max="1"
    >
      <Image
        alt="スマホの画像"
        src="/imgs/hero/phoneImg.png"
        width={250}
        height={130}
      />
    </div>
  );
};

export default Card;
