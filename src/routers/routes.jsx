import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const MyRoutes = () => {
      return (
            <BrowserRouter
                  future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                  }}
            >
                  <Routes>
                        <Route path="/" element={<Home />} />
                  </Routes>
            </BrowserRouter>
      )
}

export default MyRoutes