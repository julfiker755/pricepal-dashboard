"use client"
import React, { createContext, useContext, useState } from "react";

const TitleContext = createContext(null);

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Dashboard Overview");
  const [subtitle, setSubtitle] = useState("You can see all of your apps statistics from here");

  return (
    <TitleContext.Provider value={{ title, subtitle, setTitle, setSubtitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider");
  }
  return context;
};
