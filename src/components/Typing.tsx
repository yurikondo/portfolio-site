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
        <div className="w-full mt-8 grid grid-cols-12 flex justify-center ">
          <p className="text-lg col-span-8  max-lg:col-span-12">
            このタイピングしているような表現は、typed.jsというライブラリを使いました。
            <br />
            最後まで見ていただきありがとうございます。
            <br />
            <br />
            私は今までプログラミングでアプリを作ることをメインに勉強してきました。
            <br />
            今後はそれだけでなく、アプリケーションを通してのプロダクト作り全般に関わっていきたいです。長期的にはUI/UXなど「ユーザーにとって使いやすい・良い体験が得られる」という視点からも提案できるエンジニアになりたいです。
          </p>
          <div className="pl-5 w-full col-span-4 max-lg:col-span-12 flex justify-end">
            <Image
              alt="くまの画像"
              src="/imgs/bear.jpg"
              width={300}
              height={150}
              className=" rounded-full  max-lg:mt-8 "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Typing;
