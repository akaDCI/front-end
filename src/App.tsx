import { Route, Routes } from "react-router";

import HomePage from "./pages/Home";
import Museum from "./pages/Museum";
import Studio from "./pages/Studio";
import MainLayout from "./components/layouts/MainLayout";

export default function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </MainLayout>
    </>
  );
}
