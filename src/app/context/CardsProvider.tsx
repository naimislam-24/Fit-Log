"use client";
import { createContext, ReactNode, useState } from "react";

export const CardsContext = createContext({});

const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [planCard, setPlanCard] = useState([]);
  const [saveCard, setSaveCard] = useState([]);

  const sharedData = {
    planCard,
    setPlanCard,
    saveCard,
    setSaveCard,
  };

  return (
    <div>
      <CardsContext.Provider value={sharedData}>
        {children}
      </CardsContext.Provider>
    </div>
  );
};

export default CardsProvider;
