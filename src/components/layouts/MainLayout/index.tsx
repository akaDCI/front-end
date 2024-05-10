import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const mockUser = {
  name: "Ngo Ba Kha",
  email: "khabanh.dolce@gmail.com",
  avatar:
    "https://cand.com.vn/Files/Image/thuthuy/2019/10/31/ea654603-db33-4b11-8b28-bb7e101769d3.jpg",
};

function MainLayout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header user={mockUser} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
