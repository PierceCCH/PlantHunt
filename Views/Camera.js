import React from "react";
import { Text, View, Dimensions } from "react-native";
import Home from "../src/Views/Home";
import { ModelProvider } from "../src/ModelContext";

const { width, height } = Dimensions.get("window");
const CameraView = () => {
  return (
    <ModelProvider>
      <Home />
    </ModelProvider>
  );
};

export default CameraView;
