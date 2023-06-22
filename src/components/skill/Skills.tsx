import React, { Component } from "react";
import styles from "../../styles/Home.module.css";
import SectionTitle from "../SectionTitle";

const skills: any = [
  {
    id: "Javascript",
    icon: "fa-square-js",
    color: "yellow-300",
    tags: ["ウェブ制作", "バックエンド"],
    desc: "1番好きな言語はJavascriptです。",
  },
  {
    id: "React",
    icon: "fa-react",
    color: "sky-400",
    tags: ["Next.js", "フロントエンド制作"],
    desc: "このポートフォリオサイトは、ReactのフレームワークのNext.jsを使って作成しました。",
  },
  {
    id: "Node.js",
    icon: "fa-node",
    color: "lime-400",
    tags: ["Express", "Api開発"],
    desc: "ポートフォリオアプリのバックエンドは、Node.jsのフレームワークのExpressを使って作成しました。",
  },
  {
    id: "Figma",
    icon: "fa-figma",
    color: "lime-400",
    tags: ["アプリデザイン", "バナー作成"],
    desc: "ポートフォリオアプリのバックエンドは、Node.jsのフレームワークのExpressを使って作成しました。",
  },

];

export class Skills extends Component {
  render() {
    return (
      <div
        id="skills"
        className="commonLayout flex justify-between items-center"
      >
        <section className="w-full">
          <SectionTitle
            title="スキルスタック"
            desc="私は以下のプログラミング言語を取り扱ってきました"
          />
          {skills.map((skill: any) => (
            <div className="my-16 " key={skill.id}>
              <div
                className={`w-full border border-gray-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-${skill.color} transition-all duration-300 cursor-pointer`}
              >
                <div className="mb-6 lg:mb-0 self-center">
                  <i
                    className={`fa-brands ${skill.icon} text-9xl text-${skill.color}`}
                  ></i>
                </div>

                <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                  <h3 className="text-3xl font-semibold">{skill.id}</h3>
                  <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                    <div className={styles.badge}>ウェブ制作</div>
                    <div className={styles.badge}>フロントエンド制作</div>
                  </div>
                  <p>{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Skills;
