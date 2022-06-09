import ContactNav from "./ContactNav/ContactNav";
import HeaderS from "./Header.module.css";
import NavBar from "./NavBar/NavBar";

function Header() {
  return (
    <div className={HeaderS.Header}>
      <NavBar />
      <ContactNav />
    </div>
  );
}

export default Header;
