// import { CardsContext } from "@/app/context/CardsProvider";
import { ICard } from "@/app/types/cards-type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CardsContext } from "@/app/context/CardsProvider";

interface ICardProps {
  card: ICard;
}

const PlanCard = ({ card }: ICardProps) => {
  const { deletePlanCard } = useContext(CardsContext);

  return (
    <div className="container mx-auto mt-4">
      <div
        className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#14151a] p-5 
  shadow-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-black/20 sm:flex-row sm:items-center sm:gap-6 sm:py-6"
      >
        <div className="h-25 w-25 shrink-0 overflow-hidden rounded-xl bg-white/5">
          <Image
            src={card.image}
            alt={card.name}
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 pr-6 sm:pr-0">
          <h3 className="truncate text-sm font-bold uppercase tracking-wide text-white sm:text-base">
            {card.name}
          </h3>
          <p className=" text-white/70 sm:text-2xl">{card.difficulty}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/70">
            <span className="flex items-center gap-1">
              <span>◷</span>
              {card.duration} min
            </span>
            <span className="flex items-center gap-1">
              <span>🔥</span>
              {card.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              {card.rating}
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
          <Link href={`/workouts/${card.id}`}>
            <button
              className="w-full rounded-xl border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20
                     hover:bg-white/8 hover:shadow-lg active:scale-[0.98] sm:w-auto"
            >
              View Details
            </button>
          </Link>
          <button
            className="group inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#c8ff00] px-5 py-2.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(200,255,0,0.15)]
                      transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4ff33] hover:shadow-[0_0_25px_rgba(200,255,0,0.3)] active:scale-[0.97] sm:w-auto"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/10 text-[10px] font-black transition-transform duration-300 group-hover:rotate-6">
              ✓
            </span>
            <span>Mark as Done</span>
          </button>
          <button
            onClick={() => deletePlanCard(card.id)}
            aria-label={`Delete ${card.name}`}
            className="group inline-flex h-10 w-full items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 px-4 text-lg font-bold text-red-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300 active:scale-95 sm:w-10"
          >
            <span className="transition-transform duration-300 group-hover:rotate-90">
              ×
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
