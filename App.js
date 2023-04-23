import React from "react";
import Home from "./src/Home";
import { ModelProvider } from "./src/ModelContext";
import { Dimensions, Text, View, ScrollView } from "react-native";
import CameraView from "./Views/Camera";
import HomeView from "./Views/Home";
import { useRef, useState, useEffect } from "react";
import LogView from "./Views/Log";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

const { width, height } = Dimensions.get("window");

export default function App() {
  const scrollViewRef = useRef();
  useEffect(() => {
    // Scroll to the rightmost edge of the ScrollView
    scrollViewRef.current.scrollToEnd({ animated: false });
  }, []);
  return (
    <ScrollView
      ref={scrollViewRef}
      snapToInterval={width}
      decelerationRate="fast"
      onContentSizeChange={(contentWidth, contentHeight) => {
        // Set the initial position of the ScrollView to the rightmost edge
        scrollViewRef.current.scrollTo({
          x: contentWidth - scrollViewRef.current.clientWidth,
          animated: false,
        });
      }}
      horizontal
    >
      <CameraView />
      <HomeView />
      <LogView />
    </ScrollView>
  );
}

// <NavigationContainer>
//       <Stack.Navigator initialRouteName="home">
//         <Stack.Screen name="home" component={HomeView} />
//         <Stack.Screen name="camera" component={CameraView} />
//       </Stack.Navigator>
//     </NavigationContainer>
