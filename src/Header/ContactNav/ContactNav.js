import ContactNavS from "./ContactNav.module.css";
import tgLogo from "../ContactNav/LogosSVG/tg.svg";
import instLogo from "../ContactNav/LogosSVG/inst.svg";
import vkLogo from "../ContactNav/LogosSVG/vk.svg";
import gitLogo from "../ContactNav/LogosSVG/github.svg";
import { Link } from "react-router-dom";

function ContactNav() {
  return (
    <div className={ContactNavS.ContactNav}>
      <div className={ContactNavS.logo}>
        <a
          href="https://t.me/sakuraiiexe"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={tgLogo} alt="Telegram" />
        </a>
      </div>
      <div className={ContactNavS.logo}>
        <a
          href="https://www.instagram.com/sakuraiexe/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={instLogo}
            alt="Instagram"
            title="Instagram признан на территории РФ экстремистским и запрещен."
          />
        </a>
      </div>
      <div className={ContactNavS.logo}>
        <a
          href="https://vk.com/id729849257"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={vkLogo} alt="VK" />
        </a>
      </div>
      <div className={ContactNavS.logo}>
        <a
          href="https://github.com/Sakurai-exe"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={gitLogo} alt="Github" />
        </a>
      </div>
    </div>
  );
}

export default ContactNav;
