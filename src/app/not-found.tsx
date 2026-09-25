"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <main className="min-h-screen bg-[#0b0d10] px-4 py-16 text-white">
        <div className="mx-auto flex min-h-[80vh] max-w-4xl items-center justify-center">
          <div className="w-full text-center">
            <h1 className="bg-linear-to-r from-[#ccff00] via-[#9dff00] to-[#ffffff] bg-clip-text text-[100px] font-extrabold leading-none text-transparent sm:text-[140px] md:text-[180px]">
              404
            </h1>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl md:text-5xl">
              Page Not Found
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
              Sorry, the page you are looking for doesn&apos;t exist or may have
              been moved. Please check the URL or go back to the homepage.{" "}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* <Link
                href="/"
                className="w-full rounded-xl bg-[#ccff00] px-7 py-3.5 text-center font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8ff4d] hover:shadow-[0_10px_30px_rgba(204,255,0,0.2)] sm:w-auto"
              >
                Go Home
              </Link> */}
              <button
                onClick={() => window.history.back()}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40 hover:bg-white/10 sm:w-auto"
              >
                Go Back
              </button>
            </div>
            <p className="mt-10 text-xs text-gray-600 sm:text-sm">
              Error 404 — The requested page could not be found.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
