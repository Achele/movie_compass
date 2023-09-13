import tvIcon from "../assets/tv.png";
import menuBar from "../assets/Menu.png";
import searchIcon from "../assets/Search.png";
import loader from "../assets/loader.png";

const TvIcon = (props) => <img src={tvIcon} alt="Tv Icon" {...props} />;

const MenuBar = (props) => <img src={menuBar} alt="Menu Icon" {...props} />;

const SearchIcon = (props) => (
  <img src={searchIcon} alt="search Icon" {...props} />
);

const Loader = (props) => <img src={loader} alt="search Icon" {...props} />;

export { TvIcon, MenuBar, SearchIcon, Loader };
