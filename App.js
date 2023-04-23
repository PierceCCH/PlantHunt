import React from "react";
import Home from "./src/Home";
import { ModelProvider } from "./src/ModelContext";
import { Dimensions, Text, View, ScrollView } from "react-native";
import CameraView from "./Views/Camera";
import HomeView from "./Views/Home";
import { useRef, useState, useEffect } from "react";
import BaseTemplate from "./Views/BaseTemplate";
//import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View
      style={{
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BaseTemplate>
        <CameraView />
        <HomeView />
      </BaseTemplate>
    </View>
  );
}

// //outside return
// const scrollViewRef = useRef();
// useEffect(() => {
//   // Scroll to the rightmost edge of the ScrollView
//   scrollViewRef.current.scrollToEnd({ animated: false });
// }, []);

// //in return
// <ScrollView
//   ref={scrollViewRef}
//   snapToInterval={width}
//   decelerationRate="fast"
//   onContentSizeChange={(contentWidth, contentHeight) => {
//     // Set the initial position of the ScrollView to the rightmost edge
//     scrollViewRef.current.scrollTo({
//       x: contentWidth - scrollViewRef.current.clientWidth,
//       animated: false,
//     });
//   }}
//   horizontal
// >
//   <BaseTemplate>
//     <CameraView />
//     <HomeView />
//   </BaseTemplate>
// </ScrollView>;
