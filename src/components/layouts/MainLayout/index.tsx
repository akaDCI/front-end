import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header></Header>
      <main className="flex-1">{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
