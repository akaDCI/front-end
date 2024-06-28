import { Outlet } from "react-router-dom";

import Header from "../MainLayout/Header";
import Footer from "../MainLayout/Footer";

function MuseumLayout() {
  return (
    <div className="flex h-[100vh] flex-col">
      {/* <Header transparent /> */}
      <div className="flex-1"></div>
      <main className="absolute bottom-0 left-0 right-0 top-0">
        <Outlet />
      </main>
      {/* <Footer transparent /> */}
    </div>
  );
}

export default MuseumLayout;
