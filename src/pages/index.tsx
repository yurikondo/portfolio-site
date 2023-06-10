import Head from "next/head";

export default function Home({}) {
  return (
    <div className="h-full w-full mx-auto">
      <Head>
        <title>Notion Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 relative">
        <div className="w-screen h-screen absolute -ml-20">
          <div
            id="circle"
            className="absolute bg-slate-300 rounded-full top-0 left-0"
          >
            <img src="imgs/hero/pc.png" className="pc absolute top-2/4 "></img>
            {/* top-1/3 right-1/4  */}
            <div className="feature one text-white absolute flex ">
              <img src="imgs/circle/processor.png" alt="画像" />
              <div className="ml-5">
                <h1 className="text-3xl">processor</h1>
                <p className="mt-1">Beautiful processor</p>
              </div>
            </div>
            <div className="feature two text-white absolute flex ">
              <img src="imgs/circle/battery.png" alt="画像" />
              <div className="ml-5">
                <h1 className="text-3xl">battery</h1>
                <p className="mt-1">Beautiful battery</p>
              </div>
            </div>
            <div className="feature three text-white absolute flex ">
              <img src="imgs/circle/display.png" alt="画像" />
              <div className="ml-5">
                <h1 className="text-3xl">display</h1>
                <p className="mt-1">Beautiful display</p>
              </div>
            </div>
            <div className="feature four text-white absolute flex ">
              <img src="imgs/circle/camera.png" alt="画像" />
              <div className="ml-5">
                <h1 className="text-3xl">Camera</h1>
                <p className="mt-1">Beautiful camera</p>
              </div>
            </div>
          </div>
        </div>
        <div className="controle absolute top-2/4 flex justify-center items-center flex-col">
          <img
            src="imgs/hero/arrow.png"
            alt="矢印"
            id="upBtn"
            className="cursor-pointer w-4"
          />
          <h3 className="text-white my-3">Feature</h3>
          <img
            src="imgs/hero/arrow.png"
            alt="矢印"
            id="downBtn"
            className="cursor-pointer w-4"
          />
        </div>
      </main>
    </div>
  );
}
