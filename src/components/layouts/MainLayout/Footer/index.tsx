import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type FooterProps = {
  transparent?: boolean;
};
function Footer(props: FooterProps) {
  const footerStype = props.transparent
    ? "w-full py-1 bg-[#F8FAFC66] drop-shadow-sm backdrop-blur"
    : "w-full py-4 bg-slate-50 drop-shadow-sm";
  return (
    <header className={footerStype}>
      <div className="flex items-center justify-between mx-auto px-10 ">
        <div className="flex items-center gap-5">
          <Link to={"/"}>
            <p className="font-semibold text-lg">akaDCI</p>
          </Link>
          <Link to={"/term"}>
            <Button variant="link" className="text-sm font-normal">
              Term of service
            </Button>
          </Link>
          <Link to={"/help"}>
            <Button variant="link" className="text-sm font-normal">
              Help
            </Button>
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
