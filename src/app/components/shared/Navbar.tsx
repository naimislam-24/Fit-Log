"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CardsContext } from "@/app/context/CardsProvider";

const Navbar = () => {
  const pathname = usePathname();
  const { planCard, saveCard } = useContext(CardsContext);

  return (
    <div className="bg-[#101216] shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Workouts</a>
              </li>
              <li>
                <a>My Plan</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Image width={28} height={28} alt="Logo" src={logo} />
            <a className="btn btn-ghost text-xl">FITLOG</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <Link href="/">
              <li className={pathname === "/" ? "text-[#ccff00]" : ""}>
                Workouts
              </li>
            </Link>
            <Link href="/my-plan">
              <li className={pathname === "/my-plan" ? "text-[#ccff00]" : ""}>
                My Plan
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <Link href="/my-plan">plan ({planCard.length})</Link>
          <Link href="/my-plan">Saved ({saveCard.length})</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// (${planCard.length})
