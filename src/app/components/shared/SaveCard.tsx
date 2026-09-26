import { CardsContext } from "@/app/context/CardsProvider";
import { ICard } from "@/app/types/cards-type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

interface ICardProps {
  card: ICard;
}

const SaveCard = ({ card }: ICardProps) => {
  const { deleteSavedCard } = useContext(CardsContext);

  return (
    <div className="container mx-auto mt-4">
      <div
        className="group relative flex flex-col gap-4 rounded-2xl border border-white/10  bg-[#12151a] p-5 
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href={`/workouts/${card.id}`}>
            <button className="flex-1 rounded-xl border border-white/15 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5 sm:flex-none sm:px-5 sm:py-2.5 sm:text-sm">
              View Details
            </button>
          </Link>
          <button
            onClick={() => deleteSavedCard(card.id)}
            aria-label={`Delete ${card.name}`}
            className="group inline-flex h-10 w-full items-center justify-center rounded-xl px-4 text-lg font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-gray-800 hover:text-gray-200 active:scale-95 sm:w-10"
          >
            <span>×</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;
