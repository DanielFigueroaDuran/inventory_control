import { createContext, useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import MyRoutes from "./routers/routes"
import { Dark, Light } from "./styles/themes";

export const themeContext = createContext(null);

function App() {
  const [themeuse, setThemeuse] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;


  return (
    <>
      <themeContext.Provider value={{ theme, setThemeuse }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <div className="grid grid-cols-1">
              <MyRoutes />
            </div>
          </AuthContextProvider>
        </ThemeProvider>
      </themeContext.Provider>
    </>
  )
}

export default App
