import Image from "next/image";

export default function History() {
  return (
    <div className="w-full max-w-screen-md flex flex-col gap-4 mx-auto text-base font-body text-green-800 leading-[160%] text-pretty py-10">
      <h1 className="font-display leading-[135%] text-xl md:text-2xl text-green-800 font-bold mb-3">
        A história de Rio Pardo
      </h1>

      <p>
        Rio Pardo é uma cidade do estado do Rio Grande do Sul, localizada na
        região de transição do Pampa Gaúcho e do Bioma Mata Atlântica, com clima
        subtropical temperado e área de 2.051 km².
      </p>

      <Image
        src={"/city-map.png"}
        width={400}
        height={350}
        quality={100}
        priority
        alt="Imagem da catedral da cidade"
        className="w-80% mx-auto"
      />

      <p>
        É cortado por dois rios principais: o Rio Jacuí, que corre no sentido
        oeste-leste, dividindo o território em duas porções e o seu afluente, e
        o Rio Pardo, que corre no sentido norte-sul.
      </p>
      <p>
        O município foi uma das primeiras vilas a serem criadas, e sua
        importância para a história do estado se deve ao fato de ter tido um
        grande papel estratégico-militar, como fortaleza de defesa das
        fronteiras na conquista do território frente aos espanhóis e de estímulo
        ao povoamento - por isso, ficou conhecida como “Tranqueira Invicta”.
      </p>
      <p>
        Sua localização próxima ao Rio Jacuí favorecia o transporte e
        distribuição de mercadorias pelo estado; era, assim, o centro
        econômico-comercial da região, ocupando cerca de três quartos do
        território gaúcho e dando origem a mais de 200 dos 497 municípios do
        estado.
      </p>

      <Image
        src={"/districts.png"}
        width={400}
        height={350}
        quality={90}
        priority
        alt="Imagem da catedral da cidade"
        className="w-80% mx-auto"
      />

      <p>
        Rio Pardo oferece muitos atrativos por ter desempenhado esse importante
        papel na formação do Rio Grande. Atualmente, apresenta um leque diverso
        de imóveis com características históricas, arquitetônicas e culturais
        únicas, todos com grande valor para a memória coletiva, como a Rua da
        Ladeira, uma das primeiras ruas a serem calçadas no estado, em 1813; a
        Igreja Matriz Nossa Senhora do Rosário, construída em 1779 com
        características do Brasil colônia, similar as igrejas que existem em
        Minas Gerais; o Prédio da Antiga Escola Militar da Província (hoje
        conhecida como Centro de Cultura), onde estudou Getúlio Vargas; e a
        Ponte do Couto, a primeira ponte em estilo romano do estado, construída
        após a passagem de Dom Pedro II pelo Município.
      </p>
    </div>
  );
}
