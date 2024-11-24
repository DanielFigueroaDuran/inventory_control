import { Routes, Route } from "react-router-dom";
import { Home, LoginTemplate } from "../index.js";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginTemplate />} />

    </Routes>
  );
}
