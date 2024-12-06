import React from "react";
import Menu from "@/components/Menu";

const Home = () => {
  return (
    <main className="h-screen w-screen bg-primary flex text-white gap-10">
      <Menu />
      <div className="bg-primary">test of contents</div>
    </main>
  );
};

export default Home;
