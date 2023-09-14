import { Link } from "react-router-dom";
import {
  CalendarIcon,
  HomeIcon,
  Logo,
  LogOut,
  MovieProjectorIcon,
  TvIcon,
  TvShowIcon,
} from "./Icon";

const Sidebar = () => {
  return (
    <section className="bg-opacity-30 bg-white border border-opacity-30 border-solid border-black rounded-r-3xl h-screen flex flex-col w-48 items-center justify-center gap-3 fixed z-50">
      <nav className="w-full text-center">
        <span>
          <Link to={"/"}>
            <Logo />
          </Link>
        </span>
        {/* <span className="flex gap-2 items-center justify-start text-sm font-semibold text-gray-600 p-3"> */}
        <Link
          to={"/"}
          className="flex gap-2 items-center justify-start text-sm font-semibold text-gray-600 p-3"
        >
          <HomeIcon /> Home
        </Link>
        {/* </span> */}
        <span className="flex gap-2 items-center justify-start text-sm font-semibold text-gray-600 p-3">
          <MovieProjectorIcon /> Movies
        </span>
        <span className="flex gap-2 items-center justify-start text-sm font-semibold text-gray-600 p-3">
          <TvShowIcon /> TV Series
        </span>
        <span className="flex gap-2 items-center justify-start text-sm font-semibold text-gray-600 p-3">
          <CalendarIcon /> Upcoming
        </span>
      </nav>
      <div className="flex flex-col items-center justify-left bg-opacity-40 bg-pink-200 border border-pink-700 rounded-lg mx-4 my-4 p-6 text-gray-600">
        <h4 className="text-xs font-semibold mb-0">
          Play movie quizzes and earn free tickets
        </h4>
        <p className="text-xs font-medium">50k people are playing now</p>
        <button className="border-none bg-pink-200 text-pink-700 rounded-full px-4 py-2 font-semibold text-xs cursor-pointer">
          start playing
        </button>
      </div>

      <span className="flex items-center justify-center mt-2 cursor-pointer">
        <LogOut /> <p className="text-sm font-semibold mb-0">Log out</p>
      </span>
    </section>
  );
};

export default Sidebar;
