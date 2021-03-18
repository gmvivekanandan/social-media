import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../config/colors";
import Input from "../components/Input";
import FlatButton from "../components/button";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.mainHeading}>Welcome,</Text>
        <Text style={styles.subHeading}>Sign In to continue.</Text>
      </View>
      <View style={styles.textBoxContainer}>
        <Text>{}</Text>
        <Input label="Username" isPassword={false} />
        <Text>{}</Text>
        <Input label="Password" isPassword={true} />
        <Pressable
          style={styles.forgotPasswordPressable}
          onPress={() => {
            console.log("forgot password");
          }}
        >
          <Text>Forgot Password?</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton text="Login" />
      </View>
      <View style={styles.signupContainer}>
        <Pressable
          onPress={() => {
            console.log("Sign Up");
          }}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
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
  forgotPasswordPressable: {
    alignSelf: "flex-end",
    padding: 10,
  },
  signupContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: COLORS.primaryColor,
  },
});

export default LoginScreen;
