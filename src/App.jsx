import { AuthContextProvider } from "./context/AuthContext"
import MyRoutes from "./routers/routes"

function App() {

  return (
    <>
      <AuthContextProvider>
        <div className="grid grid-cols-1">
          <MyRoutes />
        </div>
      </AuthContextProvider>
    </>
  )
}

export default App
