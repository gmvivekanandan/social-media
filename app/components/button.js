import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { COLORS } from "../config/colors";

const FlatButton = (props) => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 52,
    backgroundColor: COLORS.primaryColor,
  },
  buttonText: {
    color: COLORS.primaryTextColor,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default FlatButton;
