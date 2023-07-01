import React, { Component } from "react";
import styles from "../../styles/Home.module.css";
import SectionTitle from "../SectionTitle";
import SkillIcons from "./SkillIcons";

const skills: any = [
  {
    id: "Javascript",
    icon: "fa-square-js",
    color: "text-yellow-300",
    borderColor: "border-yellow-300",
    tags: ["Typescript", "Sass", "MaterialUI"],
    desc: "1番好きな言語はJavascriptです。",
  },
  {
    id: "React",
    icon: "fa-react",
    color: "text-sky-400",
    borderColor: "border-yellow-300",
    tags: ["Next.js", "Redux", "tailwindcss"],
    desc: "このポートフォリオサイトは、Next.js・tailwindcssなどを使って作成しました。",
  },
  {
    id: "Node.js",
    icon: "fa-node",
    color: "text-green-700",
    borderColor: "border-green-700",
    tags: ["Express", "MongoDB", "バックエンド"],
    desc: "ポートフォリオアプリのバックエンドは、Node.jsのフレームワークのExpressを使って作成しました。",
  },
  {
    id: "Figma",
    icon: "fa-figma",
    color: "text-red-600",
    borderColor: "border-red-600",
    tags: ["アプリデザイン", "バナー作成", "モックアップ"],
    desc: "プログラミングを本格的に勉強し始める前は、Figmaでアプリのデザインなどしていました。UI/UXも興味あります。",
  },
];

export class Skills extends Component {
  render() {
    return (
      <section id="skills" className="commonLayout mt-60">
        <div className="w-full flex justify-between items-center">
          <div>
            <SectionTitle
              id="skills"
              title="スキルスタック"
              desc="私は以下のプログラミング言語を取り扱ってきました"
            />
            {skills.map((skill: any) => (
              <div className="mb-16 " key={skill.id}>
                <div
                  className={`w-full border border-gray-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start max-sm:flex-col lg:space-x-32 hover:${skill.borderColor} transition-all duration-300 cursor-pointer`}
                >
                  <div className="mb-6 lg:mb-0 self-center">
                    <i
                      className={`fa-brands ${skill.icon} text-9xl ${skill.color}`}
                    ></i>
                  </div>

                  <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                    <h3 className="text-3xl font-semibold">{skill.id}</h3>
                    <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                      {skill.tags.map((tag: string) => (
                        <div key={tag} className={styles.badge}>
                          {tag}
                        </div>
                      ))}
                    </div>
                    <p>{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SkillIcons />
      </section>
    );
  }
}

export default Skills;
