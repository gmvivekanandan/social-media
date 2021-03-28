import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../config/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.topSection}>
            <Text style={styles.userName}>Vivekanandan</Text>
            <View style={styles.buttonContainer}>
              <Icon
                name="settings"
                size={20}
                color="white"
                style={styles.btn}
              />
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.wrapper}>
              <View style={styles.following}>
                <Button title="18k followers" color={COLORS.primaryColor} />
              </View>
              <View style={styles.followers}>
                <Button title="16k following" color="grey" />
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.editProfileContainer}>
          <Icon.Button name="pencil-sharp" backgroundColor="grey">
            Edit Profile
          </Icon.Button>
        </View>
        <View style={styles.bioContainer}>
          <Text>
            Creating a life,{"\n"}
            Simplicity is the key to happiness In a world of worriers,
          </Text>
        </View>
        <View style={styles.postHeadingContainer}>
          <Text style={styles.postHeading}>Posts</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/index.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/index.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/index.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/index.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/index.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/index.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/index.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/index.jpeg")}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    height: 200,
    padding: 5,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: "flex-start",
    position: "absolute",
    marginTop: 140,
  },
  userName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  buttonContainer: {
    marginLeft: "auto",
    padding: 5,
    backgroundColor: "grey",
    borderRadius: 50,
  },
  bottomSection: {
    flexDirection: "row",
    marginTop: "auto",
    padding: 3,
    width: "100%",
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
  },
  following: {
    width: "30%",
    marginLeft: "auto",
    marginRight: 15,
  },
  followers: {
    width: "30%",
  },
  editProfileContainer: {
    flex: 1,
    marginLeft: "auto",
    padding: 5,
  },
  bioContainer: {
    padding: 10,
    width: "70%",
  },
  imageContainer: {
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 8,
  },
  postHeadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  postHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primaryColor,
  },
});

export default ProfileScreen;
