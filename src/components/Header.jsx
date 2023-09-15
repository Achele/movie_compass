import { IMDb, MenuBar, PlayIcon, Tomatoe, TvIcon } from "./Icon";
import styles from "../styles/Hero.module.css";
import SearchBar from "./Search";

const Header = () => {
  return (
    <section className={styles.heroBackground}>
      <nav className="flex justify-between py-4 px-8">
        <span className="flex items-center xs:pr-4">
          <TvIcon />
          <h1 className="text-white px-4 xs:hidden ">MovieBox</h1>
        </span>
        <div className="flex items-center overflow-hidden relative">
          <SearchBar />
        </div>
        <span className="flex items-center xs:pl-4 ">
          <h1 className="text-white px-4 xs:hidden">Sign in</h1>
          <MenuBar />
        </span>
      </nav>
      <div className=" md:w-1/2 lg:w-1/4 text-white lg:mt-40 xs:py-16 xs:px-6">
        <h1 className="text-4xl pb-3 font-bold ">John Wick 3: Parabellum</h1>
        <span className="flex  pb-2">
          <span className="flex items-center gap-1 text-xs">
            <IMDb /> 88.0 / 100
          </span>
          <span className="flex items-center gap-1 text-xs ml-6">
            <Tomatoe /> 97%
          </span>
        </span>
        <p className="py-2 xs:text-lg">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="flex items-center uppercase bg-red-600  rounded p-2 px-3 cursor-pointer hover:bg-red-800">
          <PlayIcon />
          Watch trailer
        </button>
      </div>
    </section>
  );
};

export default Header;
