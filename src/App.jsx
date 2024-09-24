import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home"
import Success from "./pages/Success"
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<ProtectedRoute element={<Success/>}/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}
