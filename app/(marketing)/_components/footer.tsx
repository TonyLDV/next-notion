import React from "react";
import Logo from "./logo";
import CustomButton from "@/components/CustomButton";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-backgrougd z-50 dark:bg-[#1F1F1F]">
      <Logo />

      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-5 text-muted-foreground">
        <CustomButton
          text="Privacy Policy"
          className="text-black bg-transparent dark:text-white dark:bg-transparent"
        />

        <CustomButton
          text="Terms & Conditions"
          className="text-black bg-transparent dark:text-white dark:bg-transparent"
        />
      </div>
    </div>
  );
};

export default Footer;
