import React, { ReactNode } from "react";
import PublicHeader from "./header";
import PublicFooter from "./footer";

const PublicMainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <div className="flex-1">{children}</div>
      <PublicFooter />
    </div>
  );
};

export default PublicMainLayout;
