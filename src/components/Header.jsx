import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3 md:p-6 bg-blue-500 text-white">
      <h1 className="text-lg md:text-2xl font-bold">
        Streamify Analytics Dashboard
      </h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
