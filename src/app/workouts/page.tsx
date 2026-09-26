import { getAllCard } from "@/app/lib/cards";
import { ICard } from "@/app/types/cards-type";
import Card from "../components/shared/Card";

const WorkoutPage = async () => {
  const data = await getAllCard();
  console.log("Data", data);

  return (
    <div>
      <div className="container mx-auto mt-16">
        <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-1xl md:text-3xl lg:text-3xl xl:text-3xl">
          THE LIBRARY
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 container mx-auto mt-8">
        {data.map((card: ICard, ind: number) => (
          <Card key={ind} card={card} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
