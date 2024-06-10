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
          <button className="border border-green-800 bg-green-800 rounded-full ml-28 mb-1 w-20 h-8 text-white">
            Carrinho
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
      <h1 className="text-white mt-8 font-extrabold text-2xl bg-green-800 flex items-center justify-center w-full h-16">
        Quem somos
      </h1>
      <div className="text-white mt-6 ml-2 font-extrabold text-xl bg-green-800 flex items-center justify-center w-full h-full">
        <p>
          O Mercadinho Favorito é um projeto para portfolio de uma página web de
          um mercadinho fictício que possui integração com um sistema próprio de
          pagamentos.
        </p>
        <img src="point-left.jpg" alt="pessoa apontando para a esquerda" />
      </div>
      <h1 className="text-white mt-8 font-extrabold text-2xl bg-green-800 flex items-center justify-center w-full h-16">
        Nossa missão
      </h1>
      <div className="text-white mt-4 ml-1 font-extrabold text-xl bg-green-800 flex items-center justify-center w-full h-full">
        <p>
          Buscar o melhor atendimento e a melhor eficácia possíveis para melhor
          atender o que nos move: o cliente.
        </p>
      </div>
      <div className="text-white mt-4 ml-1 font-extrabold text-xl bg-green-800 flex items-center justify-center w-full h-full">
        <p>Contato</p>
      </div>

      <div className="border border-green-800 bg-green-800 rounded mt-4 w-[628px] p-6 h-52 ml-[360px]">
        <form action="" method="post" className="mt-2">
          <input
            type="text"
            placeholder="Nome"
            className="w-48 h-8 mr-6 text-green-800 border border-white rounded-sm"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-48 h-8 mr-6 text-green-800 border border-white rounded-sm"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="w-32 h-8 text-green-800 border border-white rounded-sm"
          />
          <textarea
            name="textarea"
            id=""
            placeholder="Digite o conteúdo aqui"
            className="w-64 h-24 mt-8 mb-32 ml-36 text-green-800 border border-white rounded-sm"
          ></textarea>
        </form>
        <p className="text-green-800 flex items-center justify-center">
          feito por João Fábio Marques
        </p>
        <p className="text-green-800 flex items-center justify-center">
          Contato:
        </p>
        <br />
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-f%C3%A1bio-marques-pinto-898116230/"
            target="_blank"
          >
            {" "}
            <img src="linkedin.png" alt="LinkedIn" className="w-16 h-16" />{" "}
          </a>
          <a href="mailto:jfmarques2468@gmail.com">
            {" "}
            <img src="gmail.png" alt="Gmail" className="w-16 h-16" />{" "}
          </a>
          <a href="tel:+5585998487588">
            {" "}
            <img src="whatsapp.png" alt="Whatsapp" className="w-16 h-16" />{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
