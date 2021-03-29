import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { firebase } from "../config/FireBaseConfig";
import { COLORS } from "../config/colors";
import Input from "../components/Input";
import FlatButton from "../components/button";
import { ActivityIndicator } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            setLoading(false);
            navigation.navigate("home", { user });
          })
          .catch((error) => {
            setLoading(false);
            alert(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.mainHeading}>Welcome,</Text>
        <Text style={styles.subHeading}>Sign In to continue.</Text>
      </View>
      <View style={styles.textBoxContainer}>
        <Text>{}</Text>
        <Input
          label="Username"
          isPassword={false}
          valueFromInput={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <Input
          label="Password"
          isPassword={true}
          valueFromInput={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />
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
        <FlatButton
          text={loading ? <ActivityIndicator color="#fff" /> : "Login"}
          onPress={() => {
            setLoading(true);
            onLoginPress();
          }}
        />
      </View>
      <View style={styles.signupContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
          <Text style={styles.signupText}>Sign Up</Text>
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
  forgotPasswordPressable: {
    alignSelf: "flex-end",
    padding: 10,
  },
  signupContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -25,
  },
  signupText: {
    color: COLORS.primaryColor,
  },
});

export default LoginScreen;
