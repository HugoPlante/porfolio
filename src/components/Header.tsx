import React from "react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <section
      id="header"
      className="flex flex-col items-center md:flex-row min-h-screen self-center mt-20 md:mt-0"
    >
      <Avatar />
      <div className="flex flex-col pt-8 md:pl-8">
        <h1 className="pb-4">Hugo Plante</h1>
        <p className="pb-4">
          Programmeur full-stack avec un très grand intérêt pour React
        </p>
        <div className="flex flex-row space-x-4 justify-center">
          <a href="https://github.com/HugoPlante" target="_blank">
            <img
              alt="Github badge"
              src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            />
          </a>
          <a href="https://www.linkedin.com/in/hugo-plante/" target="_blank">
            <img
              alt="LinkedIn badge"
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
