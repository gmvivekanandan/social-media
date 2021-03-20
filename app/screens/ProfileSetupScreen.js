import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../config/colors";
import Input from "../components/Input";
import FlatButton from "../components/button";

const ProfileSetupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.profileImage}
        />
        <Pressable>
          <Text style={styles.uploadImageText}>Upload image</Text>
        </Pressable>
      </View>
      <View style={styles.nameContainer}>
        <Input label="Username" isPassword={false} />
      </View>
      <View style={styles.submitButtonContainer}>
        <FlatButton
          text="Submit"
          onPress={() => {
            navigation.navigate("home");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileSetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.primaryBackground,
  },
  profileImageContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  nameContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadImageText: {
    color: COLORS.primaryColor,
  },
  submitButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
