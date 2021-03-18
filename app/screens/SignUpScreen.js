import React from "react";
import { View, Text, StyleSheet, Pressable, Image} from "react-native";
import Input from "../components/Input";
import FlatButton from "../components/button";
import {COLORS} from "../config/colors";


const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.mainHeading}>Create Account,</Text>
        <Text style={styles.subHeading}>Sign Up to get started!</Text>
      </View>
      <View style={styles.textBoxContainer}>
        <Text>{}</Text>
        <Input label="Fullname" isPassword={false} />
        <Text>{}</Text>
        <Input label="Email ID" isPassword={false} />
        <Text>{}</Text>
        <Input label="Password" isPassword={true} />
        
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton text="Register" />
      </View>
      <View style={styles.signinContainer}>
      
      <Text>I'm already a member,</Text>
      <Pressable
          onPress={() => {
            console.log("Sign In");
          }}
        >
          
         <Text style={styles.signinText}>Sign In</Text>
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
  
  signinContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  signinText: {
    color: COLORS.primaryColor,
  },
});

export default SignUpScreen;


