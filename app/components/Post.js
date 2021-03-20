import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import Input from "../components/Input";

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.profileImage}
        />
        <View style={styles.innerTextContainer}>
          <Text>Name</Text>
          <Text>Time</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="heart" size={20} color="red" />
        </View>
      </View>
      <View style={styles.midSection}>
        <Image
          source={require("../assets/index.jpeg")}
          style={styles.mainImage}
        />
      </View>
      <View style={styles.bottomSection}>
        <TextInput placeholder="say something" style={styles.commentTextBox} />
        <View style={styles.iconContainer}>
          <Icon name="link" size={20} />
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 0.5,
    margin: 5,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 5,
  },
  innerTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  iconContainer: {
    justifyContent: "center",
    marginLeft: "auto",
  },
  midSection: {
    marginBottom: 10,
  },
  mainImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  bottomSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  commentTextBox: {
    borderColor: "#cdcdcd",
    borderWidth: 1,
    width: "90%",
    height: 35,
    paddingLeft: 5,
    fontSize: 14,
    borderRadius: 20,
    marginRight: 2,
  },
});
