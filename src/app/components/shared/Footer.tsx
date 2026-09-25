import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/5 bg-[#101216]">
      <div className="flex container mx-auto items-center justify-between gap-4 px-5 py-6 sm:px-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            width={26}
            height={26}
            alt="Footer Images"
            // className="h-8 w-6  text-[#ccff00]"
          />
          <span className="text-sm font-black tracking-tight text-white">
            FITLOG
          </span>
        </div>
        <p className="text-right text-[10px] leading-5 text-gray-500 sm:text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
