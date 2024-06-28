import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Logo from "../../public/logo.svg";
import { Button } from "./ui/button";

export function Header() {
  const router = useRouter();
  return (
    <>
      <header className="flex items-center justify-between w-full py-4 lg:py-8 sticky top-0 z-50 bg-gray">
        <Image
          src={Logo}
          alt="Logo"
          width={62}
          height={52}
          className="size-8 md:size-16"
        />

        <div className="hidden lg:flex items-center gap-8">
          <Link href={"/"} className="text-green-800 hover:underline text-base">
            Início
          </Link>
          <Link
            href={router.pathname === "/history" ? "/" : "/#about"}
            scroll={false}
            className="text-green-800 hover:underline text-base"
          >
            Sobre nós
          </Link>
          <Link
            href={"/history"}
            scroll={false}
            className="text-green-800 hover:underline text-base"
          >
            Sobre Rio Pardo
          </Link>
          <Button asChild>
            <Link
              href={router.pathname === "/history" ? "/" : "/#pricing"}
              scroll={false}
            >
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

          <SheetContent className="bg-gray border-none w-[300px] pt-10">
            <div className="flex flex-col gap-4">
              <Link
                href={"/"}
                className="text-green-800 hover:underline text-base"
              >
                Início
              </Link>
              <Link
                href={router.pathname === "/history" ? "/" : "/#about"}
                scroll={false}
                className="text-green-800 hover:underline text-base"
              >
                Sobre nós
              </Link>
              <Link
                href={"/history"}
                scroll={false}
                className="text-green-800 hover:underline text-base"
              >
                Sobre Rio Pardo
              </Link>
              <Link
                href={router.pathname === "/history" ? "/" : "/#pricing"}
                scroll={false}
                className="text-green-800 hover:underline text-base"
              >
                Ver pacotes
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
