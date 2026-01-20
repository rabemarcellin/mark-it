
import AppLogo from "@/components/custom/Logo";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation("translation");

  return (
    <div className="flex items-center justify-between flex-none sticky top-0 z-50 p-4 bg-white shadow snap-end">
      <div><AppLogo /></div>
      <div className="link__btn lg:!hidden bg-slate-900">
        <Menu color="white" onClick={() => setShowMenu(!showMenu)} />
      </div>
      <div className={`navbar lg:hidden ${showMenu ? "hidden" : ""}`}>
        <div className="flex gap-4 mx-auto rounded-full overflow-hidden p-2 px-8 text-sm">
          <div className="bg-white flex gap-2 mx-auto rounded-full">
            <a className="menu" href="#offer_and_services">{t("menu.offer")}</a>
            <a className="menu" href="#contact_us">{t("menu.contact")}</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="flex gap-4 mx-auto rounded-full overflow-hidden p-2 px-8 text-sm">
          <div className="bg-white flex gap-2 mx-auto rounded-full">
            <a className="menu" href="#offer_and_services">{t("menu.offer")}</a>
            <a className="menu" href="#contact_us">{t("menu.contact")}</a>
          </div>
        </div>
      </div>
    </div>)
}

export default Navbar