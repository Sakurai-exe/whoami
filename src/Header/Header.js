import HeaderS from "./Header.module.css";
import tgLogo from "../LogosSVG/tg.svg";
import instLogo from "../LogosSVG/inst.svg";
import vkLogo from "../LogosSVG/vk.svg";
import phoneLogo from "../LogosSVG/phone.svg";
import gitLogo from "../LogosSVG/github.svg";

function Header() {
  return (
    <div className={HeaderS.Header}>
      <div className={HeaderS.navBar}>
        <div className={HeaderS.navLink}>
          <a href="#">PLAY MARIO</a>
        </div>
        <div className={HeaderS.navLink}>
          <a href="#">SKILLS</a>
        </div>
        <div className={HeaderS.navLink}>
          <a href="#">ABOUT</a>
        </div>
      </div>
      <div className={HeaderS.contactDetails}>
        <div className={HeaderS.logo}>
          <img src={tgLogo} height="40px" />
        </div>
        <div className={HeaderS.logo}>
          <img src={instLogo} height="40px" />
        </div>
        <div className={HeaderS.logo}>
          <img src={vkLogo} height="40px" />
        </div>
        <div className={HeaderS.logo}>
          <img src={gitLogo} height="40px" />
        </div>
        <div className={HeaderS.logo}>
          <img src={phoneLogo} height="40px" />
        </div>
      </div>
    </div>
  );
}

export default Header;
