export default function Home() {
  return (
    <main>
      <nav>
        <ul className="mt-2 list-none flex items-center justify-center gap-8">
          <li className="border-8 rounded-full border-green-800 bg-green-800 text-white text-xl">
            Carnes
          </li>
          <li className="border-8 rounded-full border-green-800 bg-green-800 text-white">
            Frios
          </li>
          <li className="border-8 rounded-full border-green-800 bg-green-800 text-white">
            Frutas
          </li>
          <li className="border-8 rounded-full border-green-800 bg-green-800 text-white">
            Bebidas
          </li>
          <li className="border-8 rounded-full border-green-800 bg-green-800 text-white">
            Quem Somos
          </li>
          <li className="border-8 rounded-2xl border-green-800 bg-green-800 text-white">
            Nossa Missão
          </li>
          <li className="border-8 rounded-full border-green-800 bg-green-800 text-white">
            Sugestões
          </li>
          <li className="border-8 rounded-full border-green-800 bg-green-800 text-white">
            Contato
          </li>
        </ul>
      </nav>
      <br />
      <div className="h-24 flex items-center justify-start flex-col text-green-800">
        <h1>Mercadinho Favorito</h1>
        <h2>Aqui você encontra todas as suas necessidades, em um só lugar!</h2>
      </div>

    </main>
  );
}
