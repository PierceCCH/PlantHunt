//BUILD UPON THIS TEMPLATE
import React from "react";
import { Text, View, Dimensions, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { useState } from "react";
import NavigationContainer from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
//VERY HARDCODED ALIGNMENTS
const BaseHeader = (props) => {
  return (
    <View
      style={{
        width: width,
        paddingBottom: "-50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        flex: 0.125,
        flexDirection: "row",
      }}
    >
      <View style={{ marginTop: "10%", marginLeft: "32%" }}>
        <Text
          style={{
            color: "white",
            fontSize: "24",
          }}
        >
          {" "}
          plant hunt 🌿
        </Text>
      </View>

      <View
        style={{ backgroundColor: "gray", marginLeft: "5%", marginTop: "10%" }}
      >
        <Button
          onPress={props.onClickAdventure}
          color="white"
          title="Adventure"
        ></Button>
      </View>
    </View>
  );
};

export default BaseHeader;
