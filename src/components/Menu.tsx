"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";

import { usePathname } from "next/navigation";

import Activity from "../../public/images/activity.svg";
import Cam from "../../public/images/cam.svg";
import Explorer from "../../public/images/explorer.svg";
import Followers from "../../public/images/followers.svg";
import Friends from "../../public/images/friends.svg";
import Home from "../../public/images/home.svg";
import Loader from "../../public/images/loader.svg";
import Logo from "../../public/images/logo.svg";
import Messages from "../../public/images/messages.svg";
import More from "../../public/images/more.svg";
import Search from "../../public/images/search.svg";

const links = [
  {
    name: "Para você",
    path: "/",
    icon: Home,
  },
  {
    name: "LIVE",
    path: "pages/messages",
    icon: Cam,
  },
  {
    name: "Explorar",
    path: "pages/messages",
    icon: Explorer,
  },
  {
    name: "Seguindo",
    path: "pages/messages",
    icon: Followers,
  },
  {
    name: "Amigos",
    path: "pages/messages",
    icon: Friends,
  },
  {
    name: "Carregar",
    path: "pages/messages",
    icon: Loader,
  },
  {
    name: "Atividade",
    path: "pages/messages",
    icon: Activity,
  },
  {
    name: "Mensagens",
    path: "pages/messages",
    icon: Messages,
  },
  {
    name: "Mais",
    path: "pages/messages",
    icon: More,
  },
];

const Menu = () => {
  usePathname();
  return (
    <nav className="flex flex-col h-screen w-[15rem] px-[1rem]">
      <div className="h-[5rem] place-content-center text-center">
        <Image src={Logo} alt="tiktok-logo" />
      </div>
      <div>
        <Input
          placeholder="Procurar"
          className="rounded-full border-none bg-[#1f1f1f]"
        />
      </div>
      {links.map((link, index) => {
        return (
          <div className="flex h-[2.5rem] gap-2 items-center my-[0.3rem] font-bold text-base">
            <Image
              src={link.icon}
              alt={link.name}
              className="w-[2rem] h-[2rem] fill-white"
            />
            <Link href={link.path} key={index} className="">
              {link.name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
