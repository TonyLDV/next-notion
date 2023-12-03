import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="Logo"
        width="40"
        height="40"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Logo"
        width="40"
        height="40"
        className=" hidden dark:block"
      />
      <p className={`font-semibold`}>Jotion</p>
    </div>
  );
};

export default Logo;
