"use client"

import Image from "next/image";
import cart from "/public/shopping_cart.png";
import { Kanit } from "next/font/google";
import { useRouter } from "next/navigation";

const kanit = Kanit({ weight: "300", subsets: ["latin"] });

export default function Carrinho() {
  const router = useRouter();
  return (
    <main className={kanit.className}>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="border border-green-800 bg-green-800 rounded-full ml-28 mb-1 w-20 h-8 text-white"
      >Teste</button>
    </main>
  );
}
