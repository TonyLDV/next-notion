"use client";

import React from "react";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import CustomButton from "@/components/CustomButton";
import { Spinner } from "@/components/Spinner/Spinner";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl  font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the coneccted workspace , where <br />
        better, faster work happens.
      </h3>

      {isLoading && (
        <div className="flex-center h-10">
          <Spinner height={34} width={34} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <CustomButton className="custom-btn p-2 rounded-md">
          <Link href="/documents">Enter Jotion</Link>
        </CustomButton>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <CustomButton className="custom-btn p-2 rounded-md">
            Get Jotion Free
          </CustomButton>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
