import PlanButton from "@/app/components/cardDetails/PlanButton";
import SavedButton from "@/app/components/cardDetails/SavedButton";
import { getAllCard } from "@/app/lib/cards";
import { ICard } from "@/app/types/cards-type";
import Image from "next/image";
import Link from "next/link";

interface ICardDetailsProps {
  params: {
    id: string;
  };
}

// // Server ke bole dilam je amar atogula data ace AND tumi ai data gula age thekei redi kore rakho
// export async function generateStaticParams() {
//   const allCard = await getAllCard();
//   const cardIds = allCard.map((card: ICard) => {
//     return { id: card.id.toString() };
//   });
//   return cardIds;
// }

const CardDetails = async ({ params }: ICardDetailsProps) => {
  const { id } = await params;
  const allCard = await getAllCard();
  const card = allCard.find((card: ICard) => String(card.id) === id) as ICard;

  if (!card) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-4 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black">Workout Not Found</h1>
          <p className="mt-3 text-gray-400">
            The workout you are looking for does not exist.
          </p>

          <Link
            href="/workout"
            className="mt-6 inline-block rounded-xl bg-[#ccff00] px-6 py-3 font-semibold text-black transition hover:bg-[#d9ff4d]"
          >
            Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="w-full">
            <Image
              src={card.image}
              alt={card.name}
              width={200}
              height={200}
              className="h-auto max-h-170 w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
              {card.name}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              {card.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {card.muscleGroups.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-4 py-1.5 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#15181e]">
              <div className="divide-y divide-white/5">
                <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Equipment
                  </span>
                  <span className="text-right text-sm text-gray-200">
                    {card.equipment}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Difficulty
                  </span>
                  <span className="text-sm text-gray-200">
                    {card.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Sets
                  </span>
                  <span className="text-sm text-gray-200">{card.sets}</span>
                </div>
                <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Reps
                  </span>
                  <span className="text-sm text-gray-200">{card.reps}</span>
                </div>
                <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Duration
                  </span>
                  <span className="text-sm text-gray-200">
                    {card.duration} min
                  </span>
                </div>
                <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Calories
                  </span>
                  <span className="text-sm text-gray-200">
                    {card.caloriesBurned} kcal
                  </span>
                </div>
                <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Rating
                  </span>
                  <span className="text-sm text-gray-200">{card.rating}</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-lg font-black uppercase tracking-wide">
                Instructions
              </h2>
              <ol className="mt-4 space-y-4">
                {card.instructions.map((instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex gap-4 text-sm leading-6 text-gray-400"
                  >
                    <span className="shrink-0 font-medium text-gray-500">
                      {index + 1}.
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PlanButton card={card} />
              <SavedButton card={card} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardDetails;
