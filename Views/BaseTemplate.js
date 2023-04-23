//BUILD UPON THIS TEMPLATE
import React from "react";
import { Text, View, Dimensions, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { useState } from "react";
// import button from

const { width, height } = Dimensions.get("window");

const BaseTemplate = ({ children }) => {
  const [backgroundColorArray, setBackgroundColorArray] = useState([
    "bg-white",
    "bg-white",
    "bg-white",
  ]); //for views indexed 0,1,2

  handlePress = (key) => {
    console.log("Button index" + key);
    const updatedArray = backgroundColorArray.map((color, index) => {
      if (index === key) {
        return "bg-green-500";
      } else {
        return "bg-white";
      }
    });
    setBackgroundColorArray(updatedArray);
  };
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
        <Text> PLANT HUNT 🌿</Text>
      </View>

      <View style={{ flex: 8 }}>
        <ScrollView
          horizontal
          snapToInterval={height}
          decelerationRate="fast"
          style={{
            width: width,
            backgroundColor: "gray",
            flex: 8,
            flexDirection: "row",
          }}
        >
          {children}
        </ScrollView>
      </View>
      <View
        style={{
          width: width,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={tailwind(`
            ${backgroundColorArray[0]} w-1/5 text-center text-white items-center justify-center font-bold py-0.5 px-1 rounded-full`)}
        >
          <Button title="Camera 📷" onPress={() => handlePress(0)} />
        </View>

        <View
          style={tailwind(
            `${backgroundColorArray[1]} w-1/2 text-center text-white items-center justify-center font-bold py-0.5 px-1 rounded-full`
          )}
        >
          <Button title="Start/End Adventure" onPress={() => handlePress(1)} />
        </View>

        <View
          style={tailwind(
            `${backgroundColorArray[2]} w-1/6 text-center text-white items-center justify-center font-bold py-0.5 px-1 rounded-full`
          )}
        >
          <Button title="Log📒" onPress={() => handlePress(2)} />
        </View>
      </View>
    </View>
  );
};

export default BaseTemplate;
