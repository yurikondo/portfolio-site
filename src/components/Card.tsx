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
      <div className="relative flex justify-center">
        <Image
          alt="スマホの画像"
          src="/imgs/hero/phoneImg.png"
          width={250}
          height={130}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-5"
          onClick={() => {
            window.open(
              "https://amapost-5d413f7c5092.herokuapp.com/",
              "_blank"
            );
          }}
          rel="noopener noreferrer"
        >
          アプリを開く
        </button>
      </div>
    </div>
  );
};

export default Card;
