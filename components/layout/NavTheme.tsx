"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

function NavTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
    </div>
  );
}

export default NavTheme;
