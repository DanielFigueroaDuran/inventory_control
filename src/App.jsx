import { createContext, useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import MyRoutes from "./routers/routes"
import { Dark, Light } from "./styles/themes";

export const themeContext = createContext(null);

function App() {
  const [themeuse, setThemeuse] = useState("dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      <themeContext.Provider value={{ theme, setThemeuse }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <div className={`${sidebarOpen ? "active" : ""}bg-[#1C1C1E] text-white grid grid-cols-1 md:grid-cols-2`}>

              <section className="Sidebar hidden md:block">
                Sidebar
              </section>
              <section className="Menu block absolute ml-5 md:hidden">
                Menu hamburguesa
              </section>
              <section className="routes grid grid-cols-1 w-full">
                <MyRoutes />
              </section>


            </div>
          </AuthContextProvider>
        </ThemeProvider>
      </themeContext.Provider>
    </>
  )
}

export default App
