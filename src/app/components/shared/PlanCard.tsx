import { ICard } from "@/app/types/cards-type";
import Image from "next/image";
import Link from "next/link";
import DeletePlanCard from "./DeletePlanCard";
import DeleteMarkButton from "./DeleteMarkButton";

interface ICardProps {
  card: ICard;
}

const PlanCard = ({ card }: ICardProps) => {
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
        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
          <Link href={`/workouts/${card.id}`}>
            <button
              className="w-full rounded-xl border border-white/10 bg-white/3 px-5 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20
                     hover:bg-white/8 hover:shadow-lg active:scale-[0.98] sm:w-auto"
            >
              View Details
            </button>
          </Link>
          <DeleteMarkButton card={card} />
          <DeletePlanCard card={card} />
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
