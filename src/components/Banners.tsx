import SectionTitle from "./SectionTitle";
import Image from "next/image";

const bannerIds1: string[] = [
  "fireworks",
  "house",
  "pc",
  "coffee",
  "net",
  "cleaner",
  "babypillow",
  "lady",
  "coin",
];
const bannerIds2: string[] = ["aws", "aws2"];

const Banners = () => {
  return (
    <section id="banners" className="commonLayout">
      <SectionTitle
        id="banners"
        title="バナーデザイン"
        desc="FigmaやPhotoshopで作成したバナーです。バナーデザインの本を参考に作成しました。"
      />
      <div className="w-full ax-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {bannerIds1.map((item) => (
            <div key={item} className="flex justify-center mb-3">
              <Image
                alt="バナー画像"
                src={`/imgs/banners/${item}.jpg`}
                width={280}
                height={150}
              />
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {bannerIds2.map((item) => (
            <div key={item} className="flex justify-center mb-3">
              <Image
                alt="バナー画像"
                src={`/imgs/banners/${item}.jpg`}
                width={400}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banners;
