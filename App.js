import React from "react";
import Home from "./src/Home";
import { ModelProvider } from "./src/ModelContext";

export default function App() {
  return (
    <ModelProvider>
      <Home />
    </ModelProvider>
  );
}
