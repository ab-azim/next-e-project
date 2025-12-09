import PublicMainLayout from "@/components/layout/public/mainLayout";
import React, { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PublicMainLayout>{children}</PublicMainLayout>
    </div>
  );
};

export default PublicLayout;
