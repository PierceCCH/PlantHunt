//BUILD UPON THIS TEMPLATE
import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

const BaseTemplate = ({ children }) => {
  return (
    <View>
      <View
        style={{
          width: width,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          flex: 1.5,
        }}
      >
        <Text> PLANT HUNT</Text>
      </View>

      <View
        style={{
          width: width,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          flex: 8,
        }}
      >
        {children}
      </View>

      <View
        style={{
          width: width,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey",
          flex: 1,
        }}
      >
        <Text> CAMERA, START/END ADVENTURE, LOG</Text>
      </View>
    </View>
  );
};

export default BaseTemplate;
