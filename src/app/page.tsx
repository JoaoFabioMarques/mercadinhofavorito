import Image from 'next/image'

export default function Home() {
  return (
    <html lang='pt-br'>
      <body>
        <div className="banner">
          <Image src={"/shopping_cart.png"} width={"64"} height={"64"} alt={'Imagem de um carrinho'}></Image>
            <h1>Mercadinho Favorito</h1>
            <h2>Todas as suas necessidades, em um só lugar!</h2>
        </div>
      </body>
    </html>
  )
}
