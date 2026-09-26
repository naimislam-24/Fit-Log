"use client";
import { createContext, ReactNode, useState } from "react";

export const CardsContext = createContext({});

const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [planCard, setPlanCard] = useState([]);
  const [saveCard, setSaveCard] = useState([]);

  // const [planCards, setPlanCards] = useState<ICard[]>([]);
  const deletePlanCard = (id: number) => {
    setPlanCard((prev) => prev.filter((card) => card.id !== id));
  };
  const deleteSavedCard = (id: number) => {
    setSaveCard((prev) => prev.filter((card) => card.id !== id));
  };

  const sharedData = {
    planCard,
    setPlanCard,
    saveCard,
    setSaveCard,
    deletePlanCard,
    deleteSavedCard,
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

// *********************************************
// "use client";
// import { createContext, ReactNode, useState } from "react";
// import { ICard } from "../types/cards-type";

// export const CardsContext = createContext({});

// const CardsProvider = ({ children }: { children: ReactNode }) => {
//   const [planCard, setPlanCard] = useState([]);
//   // const [planCards, setPlanCards] = useState<ICard[]>([]);
//   const [saveCard, setSaveCard] = useState([]);

//   // const deletePlanCard = (id: number) => {
//   //   setPlanCards((prev) => prev.filter((card) => card.id !== id));
//   // };

//   const sharedData = {
//     planCard,
//     setPlanCard,
//     saveCard,
//     setSaveCard,
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
