import tvIcon from "../assets/tv.png";
import menuBar from "../assets/Menu.png";
import searchIcon from "../assets/Search.png";
import loader from "../assets/loader.png";
import imbd from "../assets/IMDb.png";
import tomatoe from "../assets/PngItem_1381056 1.png";
import logOut from "../assets/Logout.png";
import homeIcon from "../assets/Home.png";
import movieProjectorIcon from "../assets/Movie Projector.png";
import tvShowIcon from "../assets/TV Show.png";
import calendarIcon from "../assets/Calendar.png";
import twitterIcon from "../assets/fa-brands_twitter.png";
import instagramIcon from "../assets/fa-brands_instagram.png";
import facebookIcon from "../assets/fa-brands_facebook-square.png";
import youtubeIcon from "../assets/fa-brands_youtube.png";
import logo from "../assets/Logo.png";

const TvIcon = (props) => <img src={tvIcon} alt="Tv Icon" {...props} />;

const MenuBar = (props) => <img src={menuBar} alt="Menu Icon" {...props} />;

const SearchIcon = (props) => (
  <img src={searchIcon} alt="search Icon" {...props} />
);

const Loader = (props) => <img src={loader} alt="search Icon" {...props} />;

const IMDb = (props) => <img src={imbd} alt="search Icon" {...props} />;

const Tomatoe = (props) => <img src={tomatoe} alt="search Icon" {...props} />;
const LogOut = (props) => <img src={logOut} alt="Tv Icon" {...props} />;
const HomeIcon = (props) => <img src={homeIcon} alt="Tv Icon" {...props} />;
const MovieProjectorIcon = (props) => (
  <img src={movieProjectorIcon} alt="Tv Icon" {...props} />
);
const TvShowIcon = (props) => <img src={tvShowIcon} alt="Tv Icon" {...props} />;
const CalendarIcon = (props) => (
  <img src={calendarIcon} alt="Tv Icon" {...props} />
);
const TwitterIcon = (props) => (
  <img src={twitterIcon} alt="Tv Icon" {...props} />
);
const FacebookIcon = (props) => (
  <img src={facebookIcon} alt="Tv Icon" {...props} />
);
const InstagramIcon = (props) => (
  <img src={instagramIcon} alt="Tv Icon" {...props} />
);
const YoutubeIcon = (props) => (
  <img src={youtubeIcon} alt="Tv Icon" {...props} />
);

const Logo = (props) => <img src={logo} alt="Tv Icon" {...props} />;
export {
  TvIcon,
  MenuBar,
  SearchIcon,
  Loader,
  IMDb,
  Tomatoe,
  LogOut,
  HomeIcon,
  MovieProjectorIcon,
  TvShowIcon,
  CalendarIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  Logo,
};
