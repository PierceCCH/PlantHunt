//BUILD UPON THIS TEMPLATE
import React from "react";
import { Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const BaseHeader = () => {
  return (
    <View
      style={{
        width: width,
        paddingBottom: '-50%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        flex: 0.125,
      }}
    >
      <Text style={{
        color: 'white',
        fontSize: 24,
        marginTop: '10%',
      }}> plant hunt 🌿</Text>
    </View>
  );
};

export default BaseHeader;
