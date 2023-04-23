import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import LoginSVG from '../assets/images/misc/login.svg'
// import GoogleSVG from '../assets/images/misc/google.svg';
// import FacebookSVG from '../assets/images/misc/facebook.svg';
// import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomButton from '../src/components/CustomButton';
import InputField from '../src/components/InputField';


const { width, height } = Dimensions.get("window");

const SignupView = () => {
  // State variables for the user's name, email, and password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle sign-up button press
  const handleSignUp = () => {
    // Code to handle sign-up process
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', padding: 5}}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        horizontal={false}
        style={{paddingHorizontal: 0}}>
    <View
      style={{
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 0
      }}
    >
      
      <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
        </Text>
      
        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Welcome to PlantHunt!
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

        <CustomButton label={'Register'} onPress={handleSignUp} />
      
        <Text>Already registered?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{color: '#0d422d', fontWeight: '700'}}> Login</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
    </SafeAreaView>
  );
};

export default SignupView;
