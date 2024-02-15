import {
  BellIcon,
  SearchIcon,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className="w-full flex flex-row items-center justify-between px-12 py-4 bg-background text-black border-b border-border">
      <button className="flex items-center justify-center w-12 h-12 border border-black rounded-full">
        <User2Icon className="w-6 h-6 text-black" />
      </button>

      <Link href="/" className="flex flex-row items-center gap-[2px]">
        <img src="/logo.png" alt="WeJav Logo" className="w-16 h-16" />
        <h1 className="text-3xl font-aclonica">WeJav</h1>
      </Link>

      <div className="inline-flex items-center gap-4">
        <button className="text-black hover:text-black/55 transition-colors ease-in-out">
          <SearchIcon className="w-6 h-6" />
        </button>
        <div className="w-[2px] h-6 bg-black" />
        <button className="text-black hover:text-black/55 transition-colors ease-in-out">
          <BellIcon className="w-6 h-6" />
        </button>
        <div className="w-[2px] h-6 rounded-lg bg-black" />
        <button className="text-black hover:text-black/55 transition-colors ease-in-out">
          <ShoppingCartIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
