import { MenuBar, SearchIcon, TvIcon } from "./Icon";
import styles from "../styles/Hero.module.css";
// import styles from "../styles/"

const Header = () => {
  return (
    <section className={styles.heroBackground}>
      <nav className="flex justify-between py-4 px-8">
        <span className="flex items-center">
          <TvIcon />
          <h1 className="text-white px-4">MovieBox</h1>
        </span>
        <div className="border-2 flex items-center px-4 rounded  w-1/3">
          <input
            type="text"
            placeholder="what do you want to watch?"
            className="w-full bg-none"
          />
          <SearchIcon className={"text-gray-600"} />
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
