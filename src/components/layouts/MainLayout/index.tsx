import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header></Header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
