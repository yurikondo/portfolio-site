import React, { Component } from "react";
import Typed from "typed.js";
import Image from "next/image";

export class Typing extends Component {
  // https://www.npmjs.com/package/typed.js/v/2.0.12
  componentDidMount() {
    const options = {
      strings: ["アプリを作成.", "サイトを開設"],
      loop: true,
      typeSpeed: 140,
      backSpeed: 100,
    };

    new Typed(".auto-input", options);
  }

  render() {
    return (
      <div className="commonLayout mb-10">
        <div>
          <h1 className="text-7xl">
            ポートフォリオ<span className="auto-input"></span>
          </h1>
        </div>
        <div className="w-full mt-8 grid grid-cols-12">
          <p className="text-lg col-span-7">
            このタイピングしているような表現は、typed.jsというライブラリを使いました。
          </p>
          <Image
            alt="くまの画像"
            src="/imgs/bear.jpg"
            width={300}
            height={150}
            className="rounded-full col-span-5"
          />
        </div>
      </div>
    );
  }
}

export default Typing;
