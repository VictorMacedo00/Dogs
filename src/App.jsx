import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { UserStorage } from "./Contexts/UserContext";
import { Profile } from "./Components/Profile/Profile";
import { ProtectedRoute } from "./Components/Helper/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
