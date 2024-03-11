import Image from "next/image";
import cart from "/public/shopping_cart.png";
import { Kanit } from "next/font/google";

const kanit = Kanit({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={kanit.className}>
      <div className="h-20 flex flex-row text-green-800 bg-white gap-4">
        <Image
          src={cart}
          alt={"Imagem de um carrinho"}
          className="w-16 h-16"
        ></Image>
        <div className="flex flex-col gap-0.5 p-1">
          <h1>Mercadinho Favorito</h1>
          <h2>
            Aqui você encontra todas as suas necessidades, em um só lugar!
          </h2>
        </div>
        <form className="mt-4 mb-5 ml-64 flex items-end justify-end">
          <input
            type="text"
            placeholder="Buscar produtos"
            className="bg-white text-green-800 text-2xl tracking-tight focus-within:outline-none"
          />

          <button>
            <img
              src="lupa.png"
              alt="Botão para pesquisar"
              className="w-6 h-6 mb-1 bg-white flex items-start justify-start"
            />
          </button>
        </form>
      </div>

      <nav className="mt-2 flex items-center justify-center gap-8">
        <button className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
          Carnes
        </button>
        <button className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
          Frios
        </button>
        <button className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
          FVL
        </button>
        <button className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
          Bebidas
        </button>
        <button className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
          Quem somos
        </button>
        <button className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
          Nossa missão
        </button>
        <button className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
          Sugestões
        </button>
        <button className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
          Contato
        </button>
      </nav>
      <br />
      <h1 className="text-white font-extrabold text-2xl bg-green-800 flex items-center justify-center w-full h-16">
        Ofertas do dia
      </h1>
      <br />
      <div className="flex items-center justify-center">
        <div className="ml-8 w-64 inline-flex flex-col items-center justify-center bg-green-800 text-white gap-2 rounded-md">
          <img
            src="picanha.png"
            alt="Picanha bovina"
            className="w-48 h-48 p-2"
          />
          <p>Picanha bovina</p>
          <p>R$43,00/kg</p>
          <button className="w-24 bg-white text-green-800 rounded mb-2">
            Comprar
          </button>
        </div>
        <div className="ml-8 w-64 inline-flex flex-col items-center justify-center bg-green-800 text-white gap-2 rounded-md">
          <img
            src="gorgonzola.jpeg"
            alt="Queijo gorgonzola"
            className="w-48 h-48 p-2"
          />
          <p>Queijo gorgonzola</p>
          <p>R$19,00/un</p>
          <button className="w-24 bg-white text-green-800 rounded mb-2">
            Comprar
          </button>
        </div>
        <div className="ml-8 w-64 inline-flex flex-col items-center justify-center bg-green-800 text-white gap-2 rounded-md">
          <img src="maca.webp" alt="Maçã gala" className="w-48 h-48 p-2" />
          <p>Maçã gala</p>
          <p>R$13,00/kg</p>
          <button className="w-24 bg-white text-green-800 rounded mb-2">
            Comprar
          </button>
        </div>
        <div className="ml-8 w-64 inline-flex flex-col items-center justify-center bg-green-800 text-white gap-2 rounded-md">
          <img src="vinho.jpg" alt="Vinho tinto" className="w-48 h-48 p-2" />
          <p>Vinho tinto</p>
          <p>R$57,00/un</p>
          <button className="w-24 bg-white text-green-800 rounded mb-2">
            Comprar
          </button>
        </div>
      </div>
    </main>
  );
}
