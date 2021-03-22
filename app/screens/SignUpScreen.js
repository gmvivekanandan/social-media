import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, LogBox } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { firebase } from "../config/FireBaseConfig";
import Input from "../components/Input";
import FlatButton from "../components/button";
import { COLORS } from "../config/colors";

LogBox.ignoreLogs(["Setting a timer"]);

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("profilesetup", { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.mainHeading}>Create Account,</Text>
        <Text style={styles.subHeading}>Sign Up to get started!</Text>
      </View>
      <View style={styles.textBoxContainer}>
        <Text>{}</Text>
        <Input
          label="Email ID"
          isPassword={false}
          valueFromInput={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <Text>{}</Text>
        <Input
          label="Password"
          isPassword={true}
          valueFromInput={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton
          text="Register"
          onPress={() => {
            onSubmit();
            console.log(email, password);
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
    color: COLORS.primaryColor,
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
