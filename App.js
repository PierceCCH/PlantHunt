import React from "react";
import Home from "./src/Views/Home";
import { ModelProvider } from "./src/ModelContext";
import { Dimensions, Text, View, ScrollView } from "react-native";
import CameraView from "./Views/Camera";
import HomeView from "./Views/Home";
import BaseHeader from "./Views/BaseHeader";
import LoginView from "./Views/Login";
import SignupView from "./Views/Signup";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import { StyleSheet } from "react-native";
import LogView from "./Views/Log";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingTop: 50,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
    },
  });
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer style={styles.container}>
        <BaseHeader />
        <Tab.Navigator
          screenOptions={{ tabBarStyle: { backgroundColor: "green" } }}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
            labelStyle: {
              fontSize: 16,
              fontWeight: "bold",
            },
            style: {
              backgroundColor: "white",
            },
          }}
          initialRouteName="Home"
          tabBarPosition="bottom"
        >
          <Tab.Screen name="Camera 📷" component={CameraView} />
          <Tab.Screen name="Home" component={HomeView} />
            <LogView />
    <Tab.Screen name="Log 📒" component={LogView} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

// export default function App() {
//   return (
//     <View
//       style={{
//         width: width,
//         height: height,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <BaseTemplate>
//         <CameraView />
//         <HomeView />
//       </BaseTemplate>
//     </View>
//   );
// }

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
