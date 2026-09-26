"use Client";
import { CardsContext } from "@/app/context/CardsProvider";
import { ICard } from "@/app/types/cards-type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ICardProps {
  card: ICard;
}

const DeleteSavedCard = ({ card }: ICardProps) => {
  const { deleteSavedCard } = useContext(CardsContext);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            deleteSavedCard(card.id);
            toast.success(`Removed from saved`);
          }}
          aria-label={`Delete ${card.name}`}
          className="group inline-flex h-10 w-full items-center justify-center rounded-xl px-4 text-lg font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-gray-800 hover:text-gray-200 active:scale-95 sm:w-10"
        >
          <span>×</span>
        </button>
      </div>
    </div>
  );
};

export default DeleteSavedCard;
