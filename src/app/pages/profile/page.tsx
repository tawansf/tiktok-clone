import React from "react";
import Image from "next/image";
import ProfileImage from "../../../../public/images/profile.jpeg";
import { Button } from "@/components/ui/button";
import ShareIcon from "../../../../public/images/share.svg";
import SettingsIcon from "../../../../public/images/settings.svg";
import PostsNavigation from "@/components/PostsNavigation";

const Profile = () => {
  return (
    <main className="col-span-5 text-white py-10 px-5 ml-[15%] w-full">
      <div className="w-full flex gap-7 items-center">
        <div>
          <Image
            src={ProfileImage}
            alt="profile-image"
            className="rounded-full w-[180px] w-min-[50px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl">programacao_na_pratica</h1>
            <h2 className="text-lg">Programação na Prática</h2>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <span className="font-bold">82</span>
              <span className="text-white opacity-70">Seguindo</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">1052</span>
              <span className="text-white opacity-70">Seguidores</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">8448</span>
              <span className="text-white opacity-70">Curtidas</span>
            </div>
          </div>
          <div>
            <span>
              Tudo sobre programação, desenvolvimento de software, códigos e
              dicas :)
            </span>
          </div>
          <div className="flex gap-4">
            <Button
              type="button"
              className="bg-tiktokRed font-semibold h-10 px-4 text-lg"
            >
              Editar Perfil
            </Button>
            <Button className="bg-tiktokGrey font-semibold h-10 px-4 text-lg">
              Promover publicação
            </Button>
            <Button className="bg-tiktokGrey">
              <Image
                src={SettingsIcon}
                alt="settings-icon"
                className="w-[1.2rem] h-[1.2rem]"
              />
            </Button>
            <Button className="bg-tiktokGrey">
              <Image
                src={ShareIcon}
                alt="share-icon"
                className="w-[1.2rem] h-[1.2rem]"
              />
            </Button>
          </div>
        </div>
      </div>
      <PostsNavigation />
    </main>
  );
};

export default Profile;
