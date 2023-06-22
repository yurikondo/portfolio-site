import React, { Component } from "react";
import Typed from "typed.js";

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
      <div className="commonLayout">
        <h1 className="text-7xl">
          ポートフォリオ<span className="auto-input"></span>
        </h1>
        <p className="mt-8 text-lg">
          このタイピングしているような表現は、typed.jsというライブラリを使いました。
        </p>
      </div>
    );
  }
}

export default Typing;
