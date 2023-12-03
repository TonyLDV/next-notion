import React, {ReactNode} from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-full p-1 bg-red-500">{children}</div>;
};
export default RootLayout;
