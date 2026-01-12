import NavBar from '../components/Navbar'
import { useEffect, useRef } from "react";
import '../styles/Home.css'
function PageHeader() {
  const headerRef = useRef(null);
  useEffect(() => {
    if (!headerRef.current) return;

    const update = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current.offsetHeight}px`
      );
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <header className="header">
      <p className="Header-Name"> Lorenzo St. Luce </p>
      <div className="Navigation">
        <NavBar />
      </div>
      <hr />
    </header>
  )

}

export default PageHeader;
