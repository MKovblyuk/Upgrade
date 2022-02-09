import React from "react"
import {BrowserRouter} from "react-router-dom"
import {useAppRoutes} from "./appRoutes"
import {AuthContext} from "./context/AuthContext"
import {useAuth} from "./hooks/auth.hook"

function App() {
  const routes = useAppRoutes()
  const {token, userId, login, logout} = useAuth()
  const isAuthenticated = !!token


  return (
    <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated}}>
      <BrowserRouter>
        <div className="App">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
