"use client";
import { useContext, useState } from "react";
import { CardsContext } from "../context/CardsProvider";
import { ICard } from "../types/cards-type";
import PlanCard from "../components/shared/PlanCard";
import SaveCard from "../components/shared/SaveCard";

const MyPlanPage = () => {
  const { planCard, saveCard } = useContext(CardsContext);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const [tab, setTab] = useState("today-plan");
  // console.log("Tab", tab);

  // console.log(sortBy, "sort");
  // console.log("Plan Card", planCard);

  const sortCard = (card: ICard[]) => {
    const sortedCards = [...card];

    if (sortBy === "duration") {
      sortedCards.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedCards.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedCards.sort((a, b) => b.rating - a.rating);
    }
    return sortedCards;
  };

  const sortedPlanCard = sortCard(planCard);
  const sortedSaveCard = sortCard(saveCard);

  // console.log("sortedPlanCard", sortedPlanCard);
  // console.log("sortedSaveCard", sortedSaveCard);

  const totalExercisesPlanCard = planCard.length;
  const totalMinutesPlanCard = planCard.reduce(
    (total, card) => total + card.duration,
    0,
  );
  const totalCaloriesPlanCard = planCard.reduce(
    (total, card) => total + card.caloriesBurned,
    0,
  );

  const totalExercisesSavedCard = saveCard.length;
  const totalMinutesSavedCard = saveCard.reduce(
    (total, card) => total + card.duration,
    0,
  );
  const totalCaloriesSavedCard = saveCard.reduce(
    (total, card) => total + card.caloriesBurned,
    0,
  );
  console.log(totalCaloriesPlanCard);

  console.log(totalCaloriesSavedCard);

  return (
    <div className="min-h-[75vh]">
      <div className="container mx-auto mt-14">
        <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-1xl md:text-3xl lg:text-3xl xl:text-3xl">
          THE LIBRARY
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      {/* ************************************************************************** */}

      <div className="container mx-auto mt-8">
        {tab === "today-plan" ? (
          <div className="w-full rounded-2xl border border-white/10 bg-[#12151a] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:p-6">
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {/* Exercises */}
              <div className="flex items-center justify-between px-2 py-5 sm:px-6 sm:py-2">
                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500">
                    Exercises
                  </p>
                  <h3 className="mt-1 text-3xl font-bold text-[#ccff00]">
                    {totalExercisesPlanCard}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ccff00]/10 text-[#ccff00] sm:hidden">
                  ✓
                </div>
              </div>
              {/* Minutes */}
              <div className="flex items-center justify-between px-2 py-5 sm:px-6 sm:py-2">
                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500">
                    Minutes
                  </p>
                  <h3 className="mt-1 text-3xl font-bold text-white">
                    {totalMinutesPlanCard}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-300 sm:hidden">
                  ⏱
                </div>
              </div>
              {/* Calories */}
              <div className="flex items-center justify-between px-2 py-5 sm:px-6 sm:py-2">
                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500">
                    Calories
                  </p>
                  <h3 className="mt-1 text-3xl font-bold text-white">
                    {totalCaloriesPlanCard}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 sm:hidden">
                  🔥
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full rounded-2xl border border-white/10 bg-[#12151a] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:p-6">
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {/* Exercises */}
              <div className="flex items-center justify-between px-2 py-5 sm:px-6 sm:py-2">
                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500">
                    Exercises
                  </p>
                  <h3 className="mt-1 text-3xl font-bold text-[#ccff00]">
                    {totalExercisesSavedCard}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ccff00]/10 text-[#ccff00] sm:hidden">
                  ✓
                </div>
              </div>
              {/* Minutes */}
              <div className="flex items-center justify-between px-2 py-5 sm:px-6 sm:py-2">
                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500">
                    Minutes
                  </p>
                  <h3 className="mt-1 text-3xl font-bold text-white">
                    {totalMinutesSavedCard}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-300 sm:hidden">
                  ⏱
                </div>
              </div>
              {/* Calories */}
              <div className="flex items-center justify-between px-2 py-5 sm:px-6 sm:py-2">
                <div>
                  <p className="text-xs font-medium tracking-wide text-gray-500">
                    Calories
                  </p>
                  <h3 className="mt-1 text-3xl font-bold text-white">
                    {totalCaloriesSavedCard}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 sm:hidden">
                  🔥
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ************************************************************************** */}
      <div className="container mx-auto mt-10">
        <div className="tabs tabs-lift">
          <input
            onChange={() => setTab("today-plan")}
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
          />

          <div className="tab-content bg-base-300 border-base-300 p-6">
            <div className="">
              {sortedPlanCard.length > 0 ? (
                sortedPlanCard.map((card: ICard) => (
                  <PlanCard key={card.id} card={card} />
                ))
              ) : (
                <div>
                  <div className="flex min-h-70 items-center justify-center px-4 sm:min-h-80">
                    <div className="w-full max-w-xl px-6 py-12 text-center sm:px-10 sm:py-14">
                      <h2 className="text-xl font-black uppercase tracking-wide text-white sm:text-2xl">
                        Nothing Here Yet
                      </h2>
                      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-white/45 sm:text-sm">
                        Browse the library and add a lift to get today moving.
                      </p>
                      <button
                        className="mt-7 inline-flex items-center justify-center rounded-full bg-[#c8ff00] px-6 py-3 text-xs font-bold text-black shadow-[0_8px_25px_rgba(200,255,0,0.18)]
                                   transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4ff33] hover:shadow-[0_12px_35px_rgba(200,255,0,0.28)] active:scale-95  sm:px-7 sm:py-3.5 sm:text-sm"
                      >
                        Go to workouts
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <input
            onChange={() => setTab("saver")}
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
            // defaultChecked
          />
          <div className="tab-content bg-base-300 border-base-300 p-6">
            <div className="">
              {sortedSaveCard.length > 0 ? (
                sortedSaveCard.map((card: ICard) => (
                  <SaveCard key={card.id} card={card} />
                ))
              ) : (
                <div>
                  <div className="flex min-h-70 items-center justify-center px-4 sm:min-h-80">
                    <div className="w-full max-w-xl px-6 py-12 text-center sm:px-10 sm:py-14">
                      <h2 className="text-xl font-black uppercase tracking-wide text-white sm:text-2xl">
                        Nothing Here Yet
                      </h2>
                      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-white/45 sm:text-sm">
                        Browse the library and add a lift to get today moving.
                      </p>
                      <button
                        className="mt-7 inline-flex items-center justify-center rounded-full bg-[#c8ff00] px-6 py-3 text-xs font-bold text-black shadow-[0_8px_25px_rgba(200,255,0,0.18)]
                                   transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4ff33] hover:shadow-[0_12px_35px_rgba(200,255,0,0.28)] active:scale-95  sm:px-7 sm:py-3.5 sm:text-sm"
                      >
                        Go to workouts
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2 ml-auto">
            <h4 className="pt-2">Sort By</h4>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="rounded-lg border border-white/10 bg-[#15171c] px-4 py-2 text-sm text-white"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
