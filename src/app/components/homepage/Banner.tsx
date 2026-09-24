import Image from "next/image";
import banner from "@/app/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto mt-8">
      <div className="relative mx-auto flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#15171c] px-6 py-10 shadow-2xl sm:px-10 md:py-12 lg:min-h-78.75 lg:flex-row lg:items-center lg:px-12">
        <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#ccff00]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-[#ccff00]/5 blur-3xl" />
        <div className="relative z-10 max-w-2xl lg:w-1/2">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#ccff00]">
            Workout Library
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today s plan, and watch the week s work add up.
          </p>
          <button
            className="
              mt-7
              rounded-md
              bg-[#ccff00]
              px-6
              py-3
              text-xs
              font-extrabold
              uppercase
              tracking-wide
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#d9ff33]
              hover:shadow-[0_10px_30px_rgba(204,255,0,0.2)]
              active:translate-y-0
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>
        <div className="relative mt-8 flex items-center justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
          <div className="absolute h-52 w-52 rounded-full bg-[#ccff00]/10 blur-3xl sm:h-64 sm:w-64" />
          <Image
            src={banner}
            width={100}
            height={100}
            alt="Workout illustration"
            className="
              relative
              z-10
              w-64
              object-contain
              drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]
              transition-transform
              duration-500
              hover:scale-105
              sm:w-72
              md:w-80
              lg:w-82.5
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
