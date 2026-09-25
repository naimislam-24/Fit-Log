"use client";
import { CardsContext } from "@/app/context/CardsProvider";
import { ICard } from "@/app/types/cards-type";
import { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({ card }: { card: ICard }) => {
  const { planCard, setPlanCard } = useContext(CardsContext);

  const handlePlanButton = () => {
    const alreadyExists = planCard.some((item: ICard) => item.id === card.id);
    if (alreadyExists) {
      toast.warning(`Already in your plan`);
      return;
    }
    setPlanCard([...planCard, card]);
    toast.success(`Add to today's plan`);
  };
  return (
    <div>
      <button
        onClick={handlePlanButton}
        className="rounded-xl bg-[#ccff00] px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9ff4d] hover:shadow-lg hover:shadow-[#ccff00]/10"
      >
        Add to today&apos;s plan
      </button>
    </div>
  );
};
export default PlanButton;
