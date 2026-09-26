// "use client";
// import { createContext, ReactNode, useState } from "react";

// export const CardsContext = createContext({});

// const CardsProvider = ({ children }: { children: ReactNode }) => {
//   const [planCard, setPlanCard] = useState([]);
//   const [saveCard, setSaveCard] = useState([]);

//   const deletePlanCard = (id: number) => {
//     setPlanCard((prev) => prev.filter((card) => card.id !== id));
//   };
//   const deleteSavedCard = (id: number) => {
//     setSaveCard((prev) => prev.filter((card) => card.id !== id));
//   };

//   const sharedData = {
//     planCard,
//     setPlanCard,
//     saveCard,
//     setSaveCard,
//     deletePlanCard,
//     deleteSavedCard,
//   };

//   return (
//     <div>
//       <CardsContext.Provider value={sharedData}>
//         {children}
//       </CardsContext.Provider>
//     </div>
//   );
// };

// export default CardsProvider;

"use client";

import { createContext, ReactNode, useState } from "react";
import { ICard } from "@/app/types/cards-type";

interface CardsContextType {
  planCard: ICard[];
  setPlanCard: React.Dispatch<React.SetStateAction<ICard[]>>;
  saveCard: ICard[];
  setSaveCard: React.Dispatch<React.SetStateAction<ICard[]>>;
  deletePlanCard: (id: number) => void;
  deleteSavedCard: (id: number) => void;
}

export const CardsContext = createContext<CardsContextType>(
  {} as CardsContextType,
);

const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [planCard, setPlanCard] = useState<ICard[]>([]);
  const [saveCard, setSaveCard] = useState<ICard[]>([]);

  const deletePlanCard = (id: number) => {
    setPlanCard((prev) => prev.filter((card) => card.id !== id));
  };

  const deleteSavedCard = (id: number) => {
    setSaveCard((prev) => prev.filter((card) => card.id !== id));
  };

  const sharedData: CardsContextType = {
    planCard,
    setPlanCard,
    saveCard,
    setSaveCard,
    deletePlanCard,
    deleteSavedCard,
  };

  return (
    <CardsContext.Provider value={sharedData}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
