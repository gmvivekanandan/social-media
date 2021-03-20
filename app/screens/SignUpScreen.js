import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import FlatButton from "../components/button";
import { COLORS } from "../config/colors";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.mainHeading}>Create Account,</Text>
        <Text style={styles.subHeading}>Sign Up to get started!</Text>
      </View>
      <View style={styles.textBoxContainer}>
        <Text>{}</Text>
        <Input label="Email ID" isPassword={false} />
        <Text>{}</Text>
        <Input label="Password" isPassword={true} />
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton
          text="Register"
          onPress={() => {
            navigation.navigate("profilesetup");
          }}
        />
      </View>
      <View style={styles.signinContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={styles.signinText}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBackground,
    padding: 10,
    justifyContent: "space-around",
  },
  mainHeading: {
    fontWeight: "bold",
    fontSize: 32,
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: 26,
    color: "grey",
  },
  textBoxContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  signinContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  signinText: {
    color: COLORS.primaryColor,
  },
});

export default SignUpScreen;
