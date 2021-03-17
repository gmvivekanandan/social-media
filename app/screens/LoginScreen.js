import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../config/colors";
import Input from "../components/Input";
import FlatButton from "../components/button"

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Input name="username" />
      <Input name="password" />
      <FlatButton text="login"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
