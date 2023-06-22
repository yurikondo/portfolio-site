import React from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "../styles/Home.module.css";

const Card = () => {
  return (
    <div
      className={`border-solid border-2 border-sky-500 rounded-xl shadow-lg w-80 h-96 bg-black absolute top-64 z-10 ${styles.phone}`}
      data-tilt
      // data-tilt-glare="true"
      // data-tilt-max="1"
    >
      Card
    </div>
  );
};

export default Card;
