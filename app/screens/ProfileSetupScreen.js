import React, { useState, useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../config/colors";
import Input from "../components/Input";
import FlatButton from "../components/button";

const ProfileSetupScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [imageSelected, setimageSelected] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setimageSelected(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{
            uri: imageSelected
              ? image
              : "https://i.dlpng.com/static/png/5065892-my-profile-icon-png-327283-free-icons-library-profile-icon-png-500_500_preview.png",
          }}
          style={styles.profileImage}
        />
        <Pressable onPress={pickImage}>
          <Text style={styles.uploadImageText}>Upload image</Text>
        </Pressable>
      </View>
      <View style={styles.nameContainer}>
        <Input label="Username" isPassword={false} />
      </View>
      <View style={styles.submitButtonContainer}>
        <FlatButton
          text="Submit"
          onPress={() => {
            navigation.navigate("home");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileSetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.primaryBackground,
  },
  profileImageContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  nameContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadImageText: {
    color: COLORS.primaryColor,
  },
  submitButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
