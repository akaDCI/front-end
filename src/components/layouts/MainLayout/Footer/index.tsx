import { Link } from "react-router-dom";

function Footer() {
  return (
    <header className="w-full py-4 bg-slate-50">
      <div className="flex items-center justify-between mx-auto px-10 ">
        <div className="flex items-center gap-10">
          <Link to={"/"}>
            <p className="font-semibold text-lg">akaDCI</p>
          </Link>
          <Link to={"/term"}>
            <p className="text-base font-normal">Museum</p>
          </Link>
          <Link to={"/help"}>
            <p className="text-base font-normal">Studio</p>
          </Link>
        </div>
        <Link to={"/help"}>
          <p className="text-base font-normal">Facebook</p>
        </Link>
      </div>
    </header>
  );
}

export default Footer;
