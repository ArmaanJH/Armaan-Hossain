"use client"
import React, { createContext, useContext, useState } from "react";

type ParallaxContextType = {
  isParallaxEnabled: boolean;
  setParallaxEnabled: (enabled: boolean) => void;
};

const ParallaxContext = createContext<ParallaxContextType | undefined>(undefined);

export const ParallaxProvider = ({ children }: { children: React.ReactNode }) => {
  const [isParallaxEnabled, setParallaxEnabled] = useState(true);

  return (
    <ParallaxContext.Provider value={{ isParallaxEnabled, setParallaxEnabled }}>
      {children}
    </ParallaxContext.Provider>
  );
};

export const useParallax = () => {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error("useParallax must be used within a ParallaxProvider");
  }
  return context;
};
