import { HiMenuAlt4, HiOutlineShoppingCart } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import MenuNavigation from "./MenuNavigation";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    const headerActive = () => {
      const header = document.querySelector(".header");
      window.scrollY > 20
        ? header.classList.add("active")
        : header.classList.remove("active");
    };

    window.addEventListener("scroll", headerActive);
    return () => {
      window.removeEventListener("scroll", headerActive);
    };
  }, []);

  return (
    <>
      <div className="header">
        <nav className="container">
          <div className="menuSearch">
            <div className="menu-icon" onClick={() => setMenuToggle(true)}>
              <HiMenuAlt4 />
            </div>
            <FiSearch />
          </div>
          <div className="logo">minim</div>
          <div className="accountAndCart">
            <a href="">account</a>
            <HiOutlineShoppingCart />
          </div>
        </nav>
      </div>
      <MenuNavigation menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </>
  );
}

export default Navbar;
