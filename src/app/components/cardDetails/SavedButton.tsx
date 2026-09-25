"use client";
import { CardsContext } from "@/app/context/CardsProvider";
import { ICard } from "@/app/types/cards-type";
import { useContext } from "react";
import { toast } from "react-toastify";

const SavedButton = ({ card }: { card: ICard }) => {
  const { saveCard, setSaveCard } = useContext(CardsContext);
  //   console.log("Books Provider", cardProvider);

  const handleSaveButton = () => {
    console.log("Handle Plan Button", card);

    const alreadyExists = saveCard.some((item: ICard) => item.id === card.id);
    if (alreadyExists) {
      toast.warning(`Already in your saved`);
      return;
    }

    setSaveCard([...saveCard, card]);
    toast.success(`Save for later`);
  };

  return (
    <div>
      <button
        onClick={() => handleSaveButton()}
        className="rounded-xl border border-white/15 bg-transparent px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-[#ccff00]/50 hover:bg-white/5"
      >
        Save for later
      </button>
    </div>
  );
};

export default SavedButton;
