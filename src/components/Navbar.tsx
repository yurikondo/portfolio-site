import React from "react";

const links: any = [
  { id: "#skills", title: "スキル一覧" },
  { id: "#banners", title: "バナーデザイン" },
  { id: "#figma", title: "アプリデザイン" },
];

const iconLinks: any = [
  {
    id: "#twitter",
    url: "https://twitter.com/profile_yuri",
    icon: "fa-twitter",
  },
  { id: "#github", url: "https://github.com/yurikondo", icon: "fa-github" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="py-6 z-50 absolute top-0 left-0 w-full bg-white ">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
        <div className="text-3xl font-bold ">Yuri&apos;s Site</div>
        <div className="flex items-center">
          <div className="space-x-10 hidden md:flex">
            {links.map((link: any) => (
              <a key={link.id} href={link.id} className="hover-text">
                {link.title}
              </a>
            ))}
          </div>
          <div className="space-x-5 hidden md:flex ml-10">
            {iconLinks.map((link: any) => (
              <a
                key={link.id}
                href={link.url}
                className="hover-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa-brands ${link.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
