import { Routes, Route } from "react-router-dom";
import { Home, Login, ProtectedRoute, UserAuth } from "../index.js";

export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
