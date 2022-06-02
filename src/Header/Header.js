import HeaderS from "./Header.module.css";
import tgLogo from "../LogosSVG/tg.svg";
import instLogo from "../LogosSVG/inst.svg";
import vkLogo from "../LogosSVG/vk.svg";
// import phoneLogo from "../LogosSVG/phone.svg";
import gitLogo from "../LogosSVG/github.svg";

function Header() {
  return (
    <div className={HeaderS.Header}>
      <div className={HeaderS.navBar}>
        <div className={HeaderS.navLink}>
          <a href="#">about</a>
        </div>
        <div className={HeaderS.navLink}>
          <a href="#">skills</a>
        </div>
        <div className={HeaderS.navLink}>
          <a href="#">contact</a>
        </div>
      </div>
      <div className={HeaderS.contactDetails}>
        <div className={HeaderS.logo}>
          <img src={tgLogo} alt="Telegram" />
        </div>
        <div className={HeaderS.logo}>
          <img
            src={instLogo}
            alt="Instagram"
            title="Instagram признан на территории РФ экстремистским и запрещен."
          />
        </div>
        <div className={HeaderS.logo}>
          <img src={vkLogo} alt="VK" />
        </div>
        <div className={HeaderS.logo}>
          <img src={gitLogo} alt="Github" />
        </div>
        {/* <div className={HeaderS.logo}>
          <img src={phoneLogo} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
