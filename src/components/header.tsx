import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Logo from "../../public/logo.svg";
import { Button } from "./ui/button";

export function Header() {
  const [hidden, setHidden] = useState<boolean>(false);

  const router = useRouter();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
      return;
    }

    setHidden(false);
    return;
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.4,
          ease: "easeIn",
        }}
        className="flex items-center justify-between w-full py-4 lg:py-8 sticky top-0 left-0 z-50 bg-gray"
      >
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
            className="text-green-800 hover:underline text-base"
          >
            Sobre nós
          </Link>
          <Link
            href={"/history"}
            scroll={true}
            className="text-green-800 hover:underline text-base"
          >
            Sobre Rio Pardo
          </Link>
          <Button asChild>
            <Link href={router.pathname === "/history" ? "/" : "/#pricing"}>
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
                className="text-green-800 hover:underline text-base"
              >
                Sobre nós
              </Link>
              <Link
                href={"/history"}
                scroll={true}
                className="text-green-800 hover:underline text-base"
              >
                Sobre Rio Pardo
              </Link>
              <Link
                href={router.pathname === "/history" ? "/" : "/#pricing"}
                className="text-green-800 hover:underline text-base"
              >
                Ver pacotes
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </motion.header>
    </>
  );
}
