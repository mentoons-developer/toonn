import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AudioStories from "./pages/audio-stories/AudioStories";
import ToonlandMovies from "./pages/toonland-movies/ToonlandMovies";
import Comics from "./pages/comics/Comics";
import Faq from "./pages/faq/Faq";
import Music from "./pages/music/Music";
import Interaction from "./pages/interaction/Interaction";
import Theatre from "./pages/thertre/Theatre";
import Workshops from "./pages/workshops/Workshops";
import Mall from "./pages/mall/Mall";
import Library from "./pages/library/Library";
import "./app.css";
import InteractWithUs from "./pages/interaction/interactWithUs/InteractWithUs";
import Careers from "./pages/careers/Careers";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/audiostory" element={<AudioStories />} />
          <Route path="/music" element={<Music />} />
          <Route path="/interaction" element={<Interaction />} />
          <Route
            path="/interaction/InteractWithUs"
            element={<InteractWithUs />}
          />
          <Route path="/theatre" element={<Theatre />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/mall" element={<Mall />} />
          <Route path="/library" element={<Library />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/toonlandmovies" element={<ToonlandMovies />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
