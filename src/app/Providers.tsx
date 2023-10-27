"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const Providers: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <div className="transition-colors duration-1000 min-h-screen select-none">
            {props.children}
        </div>
    </ThemeProvider>
  );
};

export default Providers;
