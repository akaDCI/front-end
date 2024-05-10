import { Outlet } from "react-router-dom";

import Header from "../MainLayout/Header";
import Footer from "../MainLayout/Footer";

function MuseumLayout() {
  return (
    <div className="flex flex-col h-[100vh] ">
      <Header transparent />
      <div className="flex-1"></div>
      <main className="absolute top-0 right-0 bottom-0 left-0">
        <Outlet />
      </main>
      <Footer transparent />
    </div>
  );
}

export default MuseumLayout;
