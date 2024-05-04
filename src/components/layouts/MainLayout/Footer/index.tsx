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
            <p className="text-base font-normal">Term of service</p>
          </Link>
          <Link to={"/help"}>
            <p className="text-base font-normal">Help</p>
          </Link>
        </div>
        <a href="https://www.facebook.com/SawSew467/" target="_blank">
          <p className="text-base font-normal">Facebook</p>
        </a>
      </div>
    </header>
  );
}

export default Footer;
