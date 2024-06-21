import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo.svg";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full py-8">
      <Image src={Logo} alt="Logo" width={72} height={62} />

      <div className="flex items-center gap-8">
        <Link
          href={"#hero"}
          className="text-green-800 hover:underline text-base"
        >
          Início
        </Link>
        <Link
          href={"#about"}
          className="text-green-800 hover:underline text-base"
        >
          Sobre nós
        </Link>
        <Button asChild>
          <Link href={"#pricing"}>Ver pacotes</Link>
        </Button>
      </div>
    </header>
  );
}