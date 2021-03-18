import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import OutlineInput from "react-native-outline-input";
import { COLORS } from "../config/colors";

const Input = (props) => {
  const [email, setEmail] = useState("");

  const { label, isPassword } = props;

  return (
    <View style={styles.container}>
      <OutlineInput
        label={label}
        value={email}
        onChangeText={(email) => setEmail(email)}
        secureTextEntry={isPassword}
        height={52}
        activeValueColor={COLORS.secondaryTextColor}
        activeBorderColor={COLORS.primaryColor}
        activeLabelColor={COLORS.primaryColor}
        passiveBorderColor="grey"
        passiveLabelColor="grey"
        passiveValueColor={COLORS.secondaryTextColor}
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
