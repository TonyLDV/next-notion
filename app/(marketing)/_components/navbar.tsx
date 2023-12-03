"use client";

import Logo from "./logo";
import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";
import CustomButton from "@/components/CustomButton";

import { useConvexAuth } from "convex/react";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Spinner } from "@/components/Spinner/Spinner";
import { SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={`z-50 bg-background  dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6
       ${scrolled && "border-b-2 shadow-md border-[#6e6d6d]"}`}
    >
      <Logo />

      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner height={28} width={28} />}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <CustomButton text="Log in" className="p-1 rounded-xl" />
            </SignInButton>

            <SignInButton mode="modal">
              <CustomButton className="bg-black text-white dark:bg-white dark:text-black p-2 rounded-md">
                Get Jotion free
              </CustomButton>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <CustomButton>
              <Link href="/documents">Enter Jotion</Link>
            </CustomButton>

            <UserButton afterSignOutUrl="/" />
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
