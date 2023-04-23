//BUILD UPON THIS TEMPLATE
import React from "react";
import { Text, View, Dimensions, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { useState } from "react";
import NavigationContainer from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

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
