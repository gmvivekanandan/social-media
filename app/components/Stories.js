import React from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../config/colors";
import Icon from "react-native-vector-icons/Foundation";

const Stories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/index.jpeg")}
          style={styles.uploadStoryImage}
        >
          <Icon
            name="plus"
            color="#000"
            size={20}
            style={styles.addStoryButton}
          />
        </ImageBackground>
        <Image
          source={require("../assets/index.jpeg")}
          style={styles.storyImage}
        />
        <Image
          source={require("../assets/index.jpeg")}
          style={styles.storyImage}
        />
        <Image
          source={require("../assets/index.jpeg")}
          style={styles.storyImage}
        />
        <Image
          source={require("../assets/index.jpeg")}
          style={styles.storyImage}
        />
        <Image
          source={require("../assets/index.jpeg")}
          style={styles.storyImage}
        />
        <Image
          source={require("../assets/index.jpeg")}
          style={styles.storyImage}
        />
        <Image
          source={require("../assets/index.jpeg")}
          style={styles.storyImage}
        />
      </View>
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: 2,
    margin: 5,
  },
  storyImage: {
    width: 80,
    height: 110,
    borderRadius: 10,
    margin: 5,
    borderWidth: 3,
    borderColor: COLORS.secondaryColor,
  },
  uploadStoryImage: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 110,
    margin: 5,
  },
  addStoryButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
  },
});
