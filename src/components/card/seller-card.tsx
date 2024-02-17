"use client";

import { generateShimmer } from "@/lib/utils";
import Image from "next/image";

interface ISellerCardProps {
  name: string;
  profile_picture: string;
}

export default function SellerCard({ ...props }: ISellerCardProps) {
  return (
    <div className="w-full inline-flex gap-2 items-center px-4 py-2 rounded-lg border border-border">
      <div className="w-12 h-12 rounded-lg overflow-hidden relative">
        <Image
          src={props.profile_picture}
          alt="seller profile picture"
          fill
          className="object-cover"
          sizes="55vw"
          placeholder={`data:image/${generateShimmer(48, 48)}`}
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-base font-bold">{props.name}</p>
        <p className="text-xs">2.5 KM</p>
      </div>
    </div>
  );
}
