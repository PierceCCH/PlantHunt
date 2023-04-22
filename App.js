import React from "react";
import Home from "./src/Views/Home";
import { ModelProvider } from "./src/ModelContext";
import Login from "./src/Views/Login";

export default function App() {
  return (
    <ModelProvider>
      {/* <Login /> */}
      <Home />
    </ModelProvider>
  );
}
