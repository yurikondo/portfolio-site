
# ポートフォリオサイト

私の作成物を一つのページで共有できるようにしたいと思い、サイトを作りました。また試したかったライブラリなどもあったため、勉強のためにそれらも組み込みました。
https://portfolio-site-lac-three.vercel.app/

![サイト画像](https://i.gyazo.com/3332b967ed3d0bb656f7a77c270606c0.png)

## 使用技術

- Next.js : 13.4.4
- React : 18.2.0
- Sass : ^1.63.6
- Typescript : 5.0.4
- Typescript : 5.0.4
- tailwindcss : ^3.3.2

- typed.js : ^2.0.12
- vanilla-tilt : ^1.8.0

## セクションごとの解説
#### ヒーローセクション
- 左のスマホの画像をホバーすると3Dのように動くのはvanilla-tiltというライブラリを使用
- 右のアイコンとテキストが回転しているアニメーションはCSSのみで作成

#### スキルスタックセクション
- 画像はFontAwsomかSVG
- レスポンシブの含めCSSはtailwindcssも活用
- 1番下の画像が右から左へ動いているアニメーションはCSSのみで作成

#### バナーデザインセクション
- tailwindcssのGridを活用

#### アプリデザインセクション
- Figmaをiframeで埋め込み

#### 1番下のセクション
- タイピングしているような表現は、typed.jsというライブラリを使用
