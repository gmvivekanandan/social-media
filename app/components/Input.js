import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import OutlineInput from "react-native-outline-input";
import { COLORS } from "../config/colors";

const Input = (props) => {
  const { label, isPassword, valueFromInput, onChangeText } = props;

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        selectionColor={COLORS.primaryColor}
        secureTextEntry={isPassword}
        label={label}
        value={valueFromInput}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default Input;
