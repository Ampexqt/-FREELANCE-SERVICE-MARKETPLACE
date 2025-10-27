import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Client } from "./pages/Client";
import { Freelancer } from "./pages/Freelancer";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />        {/* Landing Page */}
          <Route path="login" element={<Login />} />
          <Route path="client" element={<Client />} />
          <Route path="freelancer" element={<Freelancer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}