import { ICard } from "@/app/types/cards-type";
import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  card: ICard;
}

const CardPage = ({ card }: ICardProps) => {
  return (
    <div className="">
      <Link href={`/workout/${card.id}`} className="group block w-full">
        <article
          className="
          overflow-hidden
          rounded-2xl
          border border-white/10
          bg-[#15171c]
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#ccff00]/40
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
        "
        >
          {/* Image */}
          <div className="relative aspect-16/10 w-full overflow-hidden bg-[#202228]">
            <Image
              src={card.image}
              alt={card.name}
              fill
              className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5">
            {/* Muscle Groups */}
            <div className="mb-3 flex flex-wrap gap-2">
              {card.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="
                  rounded-full
                  bg-[#ccff00]
                  px-3
                  py-1
                  text-[10px]
                  font-black
                  uppercase
                  tracking-wide
                  text-black
                "
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2
              className="
              text-lg
              font-black
              uppercase
              leading-tight
              tracking-tight
              text-white
              transition-colors
              duration-300
              group-hover:text-[#ccff00]
              sm:text-xl
            "
            >
              {card.name}
            </h2>

            {/* Equipment */}
            <p className="mt-1 text-sm text-gray-500">{card.equipment}</p>

            {/* Divider */}
            <div className="my-4 h-px bg-white/10" />

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
              {/* Duration */}
              <div className="flex items-center gap-1.5">
                <span>◷</span>
                <span>{card.duration} min</span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1.5">
                <span>🔥</span>
                <span>{card.caloriesBurned} kcal</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400">★</span>
                <span>{card.rating}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default CardPage;
