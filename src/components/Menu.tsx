"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

import Activity from "../../public/images/activity.svg";
import Cam from "../../public/images/cam.svg";
import Explorer from "../../public/images/explorer.svg";
import Followers from "../../public/images/followers.svg";
import Friends from "../../public/images/friends.svg";
import Home from "../../public/images/home.svg";
import Load from "../../public/images/loader.svg";
import Logo from "../../public/images/logo.svg";
import Messages from "../../public/images/messages.svg";
import More from "../../public/images/more.svg";
import Search from "../../public/images/search.svg";
import Profile from "../../public/images/profile.jpeg";
import Kami from "../../public/images/profiles/kami.jpeg";
import Veloso from "../../public/images/profiles/velloso.jpeg";
import Miguno from "../../public/images/profiles/miguno.jpeg";
import Desmond from "../../public/images/profiles/desmond.jpeg";
const links = [
  {
    name: "Para você",
    path: "/",
    icon: Home,
  },
  {
    name: "LIVE",
    path: "pages/live",
    icon: Cam,
  },
  {
    name: "Explorar",
    path: "pages/explorer",
    icon: Explorer,
  },
  {
    name: "Seguindo",
    path: "pages/following",
    icon: Followers,
  },
  {
    name: "Amigos",
    path: "pages/friends",
    icon: Friends,
  },
  {
    name: "Carregar",
    path: "pages/load",
    icon: Load,
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
    name: "Perfil",
    path: "pages/profile",
    icon: Profile,
  },
  {
    name: "Mais",
    path: "pages/more",
    icon: More,
  },
];

const profiles = [
  {
    user: "kamikatty",
    name: "KamiKatty",
    path: Kami,
  },
  {
    user: "migunou",
    name: "Miguno",
    path: Miguno,
  },
  {
    user: "velosovoz",
    name: "Veloso",
    path: Veloso,
  },
  {
    user: "desmond",
    name: "Desmondev",
    path: Desmond,
  },
];
const Menu = () => {
  usePathname();
  return (
    <nav className="flex flex-col h-screen w-[15rem] px-[1.5rem] relative">
      <div className="fixed">
      <div className="h-[5rem] place-content-center text-center">
        <Image src={Logo} alt="tiktok-logo" />
      </div>
      <div>
        <Input
          placeholder="Procurar"
          className="rounded-full border-none bg-[#1f1f1f]"
        />
      </div>
      </div>
      {links.map((link, index) => {
        return (
          <div className="flex h-[2.5rem] gap-2 items-center my-[0.3rem] px-[0.5rem] font-bold text-base hover:bg-[#1f1f1f] hover:rounded-lg">
            <Image
              src={link.icon}
              alt={link.name}
              className={
                "w-[1.8rem] h-[1.8rem] fill-white " +
                (link.name == "Perfil" ? "rounded-full object-fill" : null)
              }
            />
            <Link href={link.path} key={index} className="">
              {link.name}
            </Link>
          </div>
        );
      })}
      <Separator className="bg-[#616161]" />
      <div className="">
        <span className="text-[#616161] text-[14px] font-medium">
          Contas que você segue
        </span>
        {profiles.map((item, index) => {
          return (
            <div className="flex flex-row items-center justify-start gap-2 px-[.5rem] my-[5px]">
              <Image
                src={item.path}
                alt="following"
                className="w-[1.8rem] h-[1.8rem] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[15px] font-medium">{item.name}</span>
                <span className="text-[14px]">{item.user}r</span>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Menu;
