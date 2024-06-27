import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Logo from "../../public/logo.svg";
import { Button } from "./ui/button";

export function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full py-8 sticky top-0 z-50 bg-gray">
        <Image src={Logo} alt="Logo" width={72} height={62} />

        <div className="hidden lg:flex items-center gap-8">
          <Link href={"/"} className="text-green-800 hover:underline text-base">
            Início
          </Link>
          <Link
            href={"#about"}
            scroll={false}
            className="text-green-800 hover:underline text-base"
          >
            Sobre nós
          </Link>
          <Button asChild>
            <Link href={"#pricing"} scroll={false}>
              Ver pacotes
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className="flex lg:hidden" asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent className="bg-gray border-none">
            <div className="flex flex-col gap-4">
              <Link
                href={"/"}
                className="text-green-800 hover:underline text-base"
              >
                Início
              </Link>
              <Link
                href={"#about"}
                scroll={false}
                className="text-green-800 hover:underline text-base"
              >
                Sobre nós
              </Link>
              <Link
                href={"#pricing"}
                scroll={false}
                className="text-green-800 hover:underline text-base"
              >
                Sobre nós
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
