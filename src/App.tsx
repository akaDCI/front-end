import { Route, Routes } from "react-router";

import MuseumLobby from "./pages/MuseumLobby";
import MuseumDetail from "./pages/MuseumDetail";
import Studio from "./pages/Studio";

import MainLayout from "./components/layouts/MainLayout";
import MuseumLayout from "./components/layouts/MuseumLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MuseumLobby />} />
        <Route path="/museum" element={<MuseumLobby />} />
        <Route path="/studio" element={<Studio />} />
      </Route>
      <Route element={<MuseumLayout />}>
        <Route path="/museum/:lobbyId" element={<MuseumDetail />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
