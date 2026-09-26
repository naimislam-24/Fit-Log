"use client";
import { CardsContext } from "@/app/context/CardsProvider";
import { ICard } from "@/app/types/cards-type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ICardProps {
  card: ICard;
}

const DeleteMarkButton = ({ card }: ICardProps) => {
  const { deletePlanCard } = useContext(CardsContext);

  return (
    <div>
      <button
        onClick={() => {
          deletePlanCard(card.id);
          toast.success(`Removed from today's plan`);
        }}
        className="group inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#c8ff00] px-5 py-2.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(200,255,0,0.15)]
                      transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4ff33] hover:shadow-[0_0_25px_rgba(200,255,0,0.3)] active:scale-[0.97] sm:w-auto"
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/10 text-[10px] font-black transition-transform duration-300 group-hover:rotate-6">
          ✓
        </span>
        <span>Mark as Done</span>
      </button>
    </div>
  );
};

export default DeleteMarkButton;
