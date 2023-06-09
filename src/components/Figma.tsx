import styles from "../styles/Home.module.css";
import SectionTitle from "./SectionTitle";

const Figma = () => {
  return (
    <div id="figma" className="commonLayout">
      <SectionTitle
        id="figma"
        title="アプリデザイン"
        desc="Figmaで作成したマッチングアプリのモックアップです。"
      />
      <div className={`${styles.figmaSection}  flex max-xl:flex-col h-auto`}>
        <iframe
          className="w-full"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGt8ItVtosnhoBzke12oBrS%2FNuts-%25E3%2583%259D%25E3%2583%25BC%25E3%2583%2588%25E3%2583%2595%25E3%2582%25A9%25E3%2583%25AA%25E3%2582%25AA%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D29-254%26viewport%3D1203%252C92%252C0.12%26scaling%3Dscale-down%26starting-point-node-id%3D29%253A254%26mode%3Ddesign"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGt8ItVtosnhoBzke12oBrS%2FNuts-%25E3%2583%259D%25E3%2583%25BC%25E3%2583%2588%25E3%2583%2595%25E3%2582%25A9%25E3%2583%25AA%25E3%2582%25AA%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D7nwFBjrUeSCADsBg-1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Figma;
