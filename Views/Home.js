import React, {useState} from "react";
import { Text, View, Dimensions, SafeAreaView, FlatList, Button} from "react-native";
import { Avatar, TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("window");
const HomeView = ({navigation}) => {

  const [user, setUser] = useState(null)
  const [roomID, setRoomID] = useState("")

  const ListItem = ({data}) => (
    <View style={styles.listItem}>
      <Text style={styles.h1}>{data}</Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar}> 
            <Avatar.Image size={144} source={require('../assets/images/matt.jpg')} />
          </View>
          <View style={styles.statsAndWelcomeContainer}>
            <Text style={styles.h1}>Welcome, {user ? user.name : "Zinc"}</Text>
            <View style={styles.statsBox}>
              <Text style={styles.h2}>Stats</Text>
              <Text style={styles.h3}>
                {user ? user.plants : 0} / 2000 Collected
              </Text>
              <Text>
                {user ? user.adventureCount : 0} total adventures
              </Text>
            </View>
            <TextInput onChangeText={(text)=>setRoomID(text)} placeholder="Join a room 🥾" style={styles.roomInput} keyboardType= 'numeric'/>
            <Button title="Create adventure room" onPress={navigation.navigate("Adventure Mode")}/>
          </View>
        </View>
        <View style={styles.collectionContainer}>
            <Text style={styles.h1}> Collection </Text>
            {/* <TextInput style={{borderWidth: 2, width: width*0.6, borderRadius: 25, padding: 5}}> 🔎 search... </TextInput> */}
            <SafeAreaView style={styles.safeArea}>
              <FlatList
                data={user ? user.plants : ["Plant X", "Plant Y", "Plant Z", "Plant A", "Plant B", "Plant C", "Plant D"]}
                renderItem={({item}) => <ListItem data={user ? user.plants : "Plant X"} />}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
        </View>
    </View>
  );
};

const styles = {
    container: {
        flex: 1,
        flexDirection: "column",
        width: width,
        height: height, //idk why this realigns it
        justifyContent: "center",
        alignItems: "center",
    },
    profileContainer: {
        width: width,
        height: height * 0.55,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    collectionContainer: {
        width: width,
        height: height * 0.40,
        justifyContent: "center",
        alignItems: "center"
    },
    statsAndWelcomeContainer: {
        width: width * 0.5,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 10,
        alignItems: "center"
    },
    statsBox: {
        width: width * 0.45,
        height: height * 0.10,
        backgroundColor: "green",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        width: width * 0.30,
        height: height * 0.15,
        marginBottom: "auto",
        marginTop: "auto",
        paddingLeft: 10,
    },
    listItem: {
        width: width * 0.8,
        height: height * 0.1,
        backgroundColor: "grey",
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    roomInput: {
      backgroundColor: "white"
    },
    safeArea: {
      borderRadius: 20,
      padding: 10
    },
    h1: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center'
    },
    h2: {
        fontSize: 18,
        fontWeight: "bold"
    }
}

export default HomeView;
