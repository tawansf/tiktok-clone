import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Posts from "@/components/Posts";

const PostsNavigation = () => {
  return (
    <Tabs defaultValue="videos" className="">
      <TabsList>
        <TabsTrigger value="videos">Vídeos</TabsTrigger>
        <TabsTrigger value="reposts">Republicações</TabsTrigger>
        <TabsTrigger value="favorites">Favoritos</TabsTrigger>
        <TabsTrigger value="liked">Curtido</TabsTrigger>
      </TabsList>
      <TabsContent value="videos">
        <Posts />
      </TabsContent>
      <TabsContent value="password">adasdasdasdasdasda</TabsContent>
      <TabsContent value="favorites">asdasdasdasddasdaasd</TabsContent>
      <TabsContent value="liked">asdasasdasdasdasdadsasdd</TabsContent>
    </Tabs>
  );
};

export default PostsNavigation;
