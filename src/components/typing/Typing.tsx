import React, { Component } from "react";
import Typed from "typed.js";

export class Typing extends Component {
  // https://www.npmjs.com/package/typed.js/v/2.0.12
  componentDidMount() {
    const options = {
      strings: ["<i>イタリック文字</i> 一つ目の文字.", "&amp; 二つ目の文字"],
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
          音にこだわる<span className="auto-input"></span>
        </h1>
        <p>
          丹念に、そして精密に、打鍵音を意識して作られた
          <br />
          キーボードやマウスを販売する数少ないタイピング専門店です。
        </p>
        <a href="">お問い合わせ</a>
        <a href="" className="online-button">
          オンライン相談
        </a>
      </div>
    );
  }
}

export default Typing;
