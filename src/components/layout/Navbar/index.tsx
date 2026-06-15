
import AppLogo from "@/components/custom/Logo";
import { Menu } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router";

type Props = {
  activateDarkMode?: boolean;
}

const Navbar = ( { activateDarkMode = false }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation("translation");

  const combineStyels = (stylesArray: string[]) => {
    return stylesArray.reduce((acc, style) => (acc + " " + style).trim(), "");
  }

  const menuStyle = useMemo(() => combineStyels([
    "menu",
    activateDarkMode ? "text-white" : "",
  ]), [activateDarkMode]);
 

  return (
    <div className="flex-none fixed flex justify-center items-center top-0 z-50 p-4 w-full shadow">
      <div className="backdrop-blur-lg bg-white/10 flex justify-center items-center gap-4 rounded-xl px-8">

      <div><AppLogo bgDark={activateDarkMode} /></div>
      <div className="link__btn lg:!hidden bg-slate-900">
        <Menu color="white" onClick={() => setShowMenu(!showMenu)} />
      </div>
      <div className={`navbar lg:hidden ${showMenu ? "hidden" : ""}`}>
        <div className="flex gap-4 mx-auto rounded-full overflow-hidden text-sm">
          <div className="flex gap-2 mx-auto rounded-full">
            <a className={menuStyle} href="#offer_and_services">{t("menu.offer")}</a>
            <a className={menuStyle} href="#contact_us">{t("menu.contact")}</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="flex gap-4 mx-auto rounded-full overflow-hidden p-2 text-sm">
          <div className="flex gap-2 mx-auto rounded-full">
            <a className={menuStyle} href="#offer_and_services">{t("menu.offer")}</a>
            <a className={menuStyle} href="#contact_us">{t("menu.contact")}</a>
          </div>
        </div>
      </div>
      </div>

    </div>)
}

export default Navbar