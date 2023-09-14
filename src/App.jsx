import { Route, Routes } from "react-router-dom";
import "./App.css";
import MoviePage from "./components/MoviePage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
