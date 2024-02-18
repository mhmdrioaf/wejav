"use client";

import {
  BellIcon,
  LogInIcon,
  SearchIcon,
  ShoppingCartIcon,
  SquarePenIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import useHeader from "./useHeader";
import { twMerge } from "tailwind-merge";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "../dropdown";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const { isScrolling } = useHeader();
  const headerStyle = {
    normal: "py-4 bg-background",
    scrolling: "py-2 bg-white/75 backdrop-blur-sm",
  };

  return (
    <header
      className={twMerge(
        "w-full flex flex-row items-center justify-between px-12 text-black border-b border-border sticky top-0 z-30 transition-all duration-150 ease-in-out",
        isScrolling ? headerStyle.scrolling : headerStyle.normal
      )}
    >
      <Dropdown>
        <DropdownTrigger>
          <div className="flex items-center justify-center w-12 h-12 border border-black/75 rounded-full">
            <User2Icon className="w-6 h-6 text-black/75" />
          </div>
        </DropdownTrigger>

        <DropdownContent>
          <DropdownItem>
            <Link
              href="/login"
              className="w-full h-full inline-flex gap-1 items-center justify-center"
            >
              <LogInIcon className="w-4 h-4" />
              <p>Masuk</p>
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link
              href="/register"
              className="w-full h-full inline-flex gap-1 items-center justify-center"
            >
              <SquarePenIcon className="w-4 h-4" />
              <p>Daftar</p>
            </Link>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>

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
