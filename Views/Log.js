import React from "react";
import { Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const LogView = () => {
  return (
    <View
      style={{
        width: width,
        height: height, //idk why this realigns it
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>LOG YOUR PLANS!</Text>
    </View>
  );
};

export default LogView;
