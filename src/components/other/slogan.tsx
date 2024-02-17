"use client";

import { ArmchairIcon, ChevronsRightIcon, PointerIcon } from "lucide-react";
import Image from "next/image";
import bg from "../../../public/wejav-bg.jpg";

export default function Slogan() {
  return (
    <div className="w-full rounded-lg overflow-hidden flex flex-col gap-4 justify-end items-center h-full relative">
      <Image
        src={bg}
        fill
        className="object-cover z-0 brightness-125 contrast-125"
        alt="WeJav"
        placeholder="blur"
        sizes="85vw"
      />

      <div className="w-full bg-black/40 px-4 py-2 backdrop-blur-sm flex flex-col gap-4 z-10 text-white rounded-t-lg items-center justify-center">
        <div className="flex flex-col gap-0 items-center">
          <p className="text-4xl font-aclonica">WeJav</p>
          <p className="text-base">Pesan Cepat, Makan Nyaman</p>
        </div>
        <p className="text-sm text-center text-balance">
          WeJav adalah aplikasi web yang menyediakan jasa pengiriman dan
          pemesanan makanan online. Kami berkomitmen untuk memberikan layanan
          terbaik bagi para pengguna dengan menjamin:
        </p>

        <div className="w-full inline-flex gap-2 items-center justify-center">
          <div className="px-2 py-2 inline-flex gap-1 items-center border border-white text-white rounded-full">
            <ChevronsRightIcon className="w-4 h-4" />
            <p className="text-xs">Kecepatan</p>
          </div>
          <div className="px-2 py-2 inline-flex gap-1 items-center border border-white text-white rounded-full">
            <PointerIcon className="w-4 h-4" />
            <p className="text-xs">Kemudahan</p>
          </div>
          <div className="px-2 py-2 inline-flex gap-1 items-center border border-white text-white rounded-full">
            <ArmchairIcon className="w-4 h-4" />
            <p className="text-xs">Kenyamanan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
