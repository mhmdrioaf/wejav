import { StarIcon } from "lucide-react";

interface IReviewCardProps {
  reviewer: {
    name: string;
    total_rating: number;
    message: string | null;
  };
}

export default function ReviewCard({ reviewer }: IReviewCardProps) {
  return (
    <div className="w-full flex flex-col gap-1 px-4 py-2 rounded-lg border border-border">
      <div className="inline-flex items-center gap-[2px]">
        <p className="text-xs font-bold">{reviewer.name}</p>
        <div className="w-[2px] h-full bg-black rounded-lg" />
        <StarIcon className="w-3 h-3 fill-accent text-black" />
        <p className="text-xs">{reviewer.total_rating}</p>
      </div>

      <p className="text-xs">{reviewer.message ?? ""}</p>
    </div>
  );
}
