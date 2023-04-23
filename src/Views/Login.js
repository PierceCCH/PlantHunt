// A login page that connects to the backend and logs the user in

import React, {useState, useEffect, useContext, useNavigation} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    setLoading(true);
    setError("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}


