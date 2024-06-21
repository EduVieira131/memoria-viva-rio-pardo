import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Avatar from "../../public/avatar.svg";

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
              <h1 className="font-display text-3xl text-green-800 leading-[135%] font-bold">
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

        <section className="mx-auto my-[100px] w-[780px] flex flex-col gap-10">
          <h2 className="font-display leading-[135%] text-2xl text-green-800 font-bold">
            “Uma das melhores experiências que já tive. Locais magníficos,
            passeios interessantes e equipe atenciosa!”
          </h2>

          <div className="flex items-center gap-4">
            <Image
              src={Avatar}
              alt="Avatar de um homem de barba e chapéu"
              width={70}
              height={70}
            />

            <div className="flex flex-col gap-1">
              <span className="text-sm text-green-600">João Silva</span>
              <span className="text-sm text-green-600">Empresário</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
