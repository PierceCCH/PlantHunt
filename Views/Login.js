import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { auth, provider } from "../firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

// import LoginSVG from '../assets/images/misc/login.svg'
// import GoogleSVG from '../assets/images/misc/google.svg';
// import FacebookSVG from '../assets/images/misc/facebook.svg';
// import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomButton from "../src/components/CustomButton";
import InputField from "../src/components/InputField";

const { width, height } = Dimensions.get("window");

const LoginView = ({ navigation, route }) => {
  // State variables for the user's name, email, and password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle sign-up button press
  const handleLogin = () => {
    console.log("Logging in...");

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    route.params.setLogIn(true);
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 5 }}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        horizontal={false}
        style={{ paddingHorizontal: 0 }}
      >
        <View
          style={{
            width: width,
            height: height,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 0,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 28,
              fontWeight: "500",
              color: "#333",
              marginBottom: 30,
            }}
          >
            Login
          </Text>

          <Text
            style={{ textAlign: "center", color: "#666", marginBottom: 30 }}
          >
            Welcome to PlantHunt!
          </Text>

          <InputField
            label={"Email ID"}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
          />

          <InputField
            label={"Password"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
          />

          <CustomButton label={"Login"} onPress={handleLogin} />

          <Text>Haven't registered?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={{ color: "#0d422d", fontWeight: "700" }}>
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginView;
