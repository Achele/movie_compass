import { MenuBar, SearchIcon, TvIcon } from "./Icon";
import styles from "../styles/Hero.module.css";
import SearchBar from "./Search";
// import styles from "../styles/"

const Header = () => {
  return (
    <section className={styles.heroBackground}>
      <nav className="flex justify-between py-4 px-8">
        <span className="flex items-center">
          <TvIcon />
          <h1 className="text-white px-4">MovieBox</h1>
        </span>
        <div className="flex items-center overflow-hidden relative">
          <SearchBar />
        </div>
        <span className="flex items-center">
          <h1 className="text-white px-4">Sign in</h1>
          <MenuBar />
        </span>
      </nav>
    </section>
  );
};

export default Header;
