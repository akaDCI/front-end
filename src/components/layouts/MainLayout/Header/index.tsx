import { Link } from "react-router-dom";
import logo from "@/assets/icons/logo512.png";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function Header() {
  return (
    <header className="w-full py-4 bg-slate-50 drop-shadow-sm">
      <div className="flex items-center justify-between mx-auto px-10">
        <div className="flex items-center gap-[20px]">
          <Link to={"/"}>
            <div className="flex">
              <img src={logo} alt="logo" className="size-8" />
              <h1 className="font-semibold text-2xl ">akaDCI</h1>
            </div>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to={"/museum"}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Museum
                  </NavigationMenuLink>
                </Link>
                <Link to={"/studio"}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Studio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Register</Button>
          <Button variant="default">Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
