import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-black flex flex-row items-center justify-between px-12 py-4 border-t border-border">
      <p className="text-xl font-semibold">WeJav ID &copy;2024</p>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">Quick Links</p>

        <Link href="#" className="text-xs underline">
          Tentang
        </Link>
        <Link href="#" className="text-xs underline">
          Karir
        </Link>
        <Link href="#" className="text-xs underline">
          Cakupan Tempat
        </Link>
        <Link href="#" className="text-xs underline">
          Menjadi Penjual
        </Link>
      </div>
    </footer>
  );
}
