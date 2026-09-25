"use client";
import { useContext } from "react";
import { CardsContext } from "../context/CardsProvider";
import { ICard } from "../types/cards-type";
import PlanCard from "../components/shared/PlanCard";
import SaveCard from "../components/shared/SaveCard";

const MyPlanPage = () => {
  const { planCard, saveCard } = useContext(CardsContext);
  console.log("Plan Card", planCard);

  return (
    <div className="">
      <div className="container mx-auto mt-16">
        <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-1xl md:text-3xl lg:text-3xl xl:text-3xl">
          THE LIBRARY
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="container mx-auto">
        {/* My Plan Page: <br /> My Save Page: */}
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`Today's Plan (${planCard.length})`}
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="">
              {planCard.length > 0 ? (
                planCard.map((card: ICard) => (
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
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`Saved (${saveCard.length})`}
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="">
              {saveCard.length > 0 ? (
                saveCard.map((card: ICard) => (
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
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
