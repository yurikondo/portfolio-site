import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="py-6 z-50 absolute top-0 left-0 w-full bg-white ">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <div className="text-3xl font-bold ">Portfolio Site</div>
        <div className="space-x-12 hidden md:flex">
          <a href="#" className="hover-text">
            ホーム
          </a>
          <a href="#skills" className="hover-text">
            スキル一覧
          </a>
          <a href="#figma" className="hover-text">
            アプリデザイン
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
