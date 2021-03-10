import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  var name = props.name;
  return <TextInput style={styles.inputStyle} placeholder={name} />;
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    margin: 5,
  },
});

export default Input;
