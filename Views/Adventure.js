import React from "react";
import { Text, View, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import LogEntry from "../src/LogEntry";

const { width, height } = Dimensions.get("window");
const AdventureView = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ECECEC",
        paddingTop: "15%",
      }}
    >
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "24",
            marginBottom: "5%",
          }}
        >
          THIS IS THE ADVENTURE PAGE
        </Text>
      </View>
    </View>
  );
};

export default AdventureView;
