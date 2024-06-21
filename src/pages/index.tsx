import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Memória Viva Rio Pardo</title>
      </Head>
      <main>
        <section
          id="hero"
          className="flex items-center justify-between w-full h-[500px]"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 max-w-[500px]">
              <h1 className="font-display text-3xl text-green-800 leading-[135%]">
                Descubra pontos históricos restaurados
              </h1>
              <p className="text-base text-pretty text-green-800">
                Conheça pontos históricos da cidade de Rio Pardo enquanto ajuda
                na restauração de prédios históricos e aprenda sobre esta que é
                uma cidade de extrema importância histórica para o Rio Grande do
                Sul.
              </p>
            </div>

            <div className="space-x-3">
              <Button asChild>
                <Link href={"#pricing"}>Ver pacotes</Link>
              </Button>
              <Button variant={"outline"} asChild>
                <a href="mailto:memoriavivariopardo@gmail.com" target="_blank">
                  Entrar em contato
                </a>
              </Button>
            </div>
          </div>

          <Image
            src={"/hero-image.png"}
            width={400}
            height={350}
            alt="Imagem da catedral da cidade"
            className="w-[40%]"
          />
        </section>
      </main>
    </>
  );
}
