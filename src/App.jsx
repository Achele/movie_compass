import { Route, Routes } from "react-router-dom";
import "./App.css";
import MoviePage from "./components/MoviePage";
import Home from "./pages/Home";
import MovieSearchResult from "./pages/MovieSearchResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/search/:query" element={<MovieSearchResult />} />
      </Routes>
    </>
  );
}

export default App;
