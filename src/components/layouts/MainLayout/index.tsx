import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

export default MainLayout;
