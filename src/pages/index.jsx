import React from "react";
import { desktopHomeHeader } from "../../public/assets";

function Home() {
  return (
    <main className={`w-full h-screen  bg-[${desktopHomeHeader}] bg-cover bg-black`}>
      <div>
        <h2>Home</h2>
      </div>
    </main>
  );
}

export default Home;
