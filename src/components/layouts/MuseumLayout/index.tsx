import { Link, Outlet } from "react-router-dom";

import { Button } from "@/components/ui/button";

function MuseumLayout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <header className="w-full py-4 bg-slate-50 drop-shadow-md">
        <div className="flex items-center justify-between mx-auto px-10 ">
          <Link to={"/"}>
            <h1 className="font-semibold text-2xl">akaDCI</h1>
          </Link>
          <div className="flex items-center  gap-[20px]">
            <Link to={"/museum"}>
              <Button variant={"link"}>
                <p className="text-base font-normal">Museum</p>
              </Button>
            </Link>
            <Link to={"/studio"}>
              <Button variant={"link"}>
                <p className="text-base font-normal">Studio</p>
              </Button>
            </Link>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Register</Button>
            <Button variant="default">Login</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default MuseumLayout;
