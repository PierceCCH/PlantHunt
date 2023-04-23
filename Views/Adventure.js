import React from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import tailwind from "tailwind-rn";
import LogEntry from "../src/LogEntry";
import { useState } from "react";

const { width, height } = Dimensions.get("window");
const containers = {
  width: width,
  //height: height,
  justifyContent: "center",
  alignItems: "center",
};
const styles = StyleSheet.create({
  containers: {
    width: width,
    //height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  info: { ...containers, flex: 1 },
  leaderboard: {
    ...containers,
    flex: 2,
    backgroundColor: "green",
    borderRadius: 20,
    marginLeft: "10%",
    marginRight: "10%",
  },
  myCollectionHeader: { ...containers, flex: 0.5 },
  myCollection: { ...containers, flex: 4, backgroundColor: "green" },
});
const AdventureView = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: width,
          height: height,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ECECEC",
          flexDirection: "column",
        }}
      >
        <View style={styles.info}>
          <Text>Info</Text>
        </View>
        <View style={styles.leaderboard}>
          <Text>Leaderboard</Text>
        </View>
        <View style={styles.myCollectionHeader}>
          <Text>My Collection</Text>
        </View>
        <View style={styles.myCollection}>
          <Text>Insert Grid of Plants here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AdventureView;
