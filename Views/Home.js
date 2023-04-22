import React from "react";
import { Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const HomeView = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>HOMEVIEW YEET!</Text>
    </View>
  );
};

export default HomeView;
