import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";

const Post = (props) => {
  const [iconColor, seticonColor] = useState("black");
  const [likePressed, setlikePressed] = useState(false);

  const { email, id, url } = props;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{
            uri:
              "https://i.dlpng.com/static/png/5065892-my-profile-icon-png-327283-free-icons-library-profile-icon-png-500_500_preview.png",
          }}
          style={styles.profileImage}
        />
        <View style={styles.innerTextContainer}>
          <Text style={styles.profileName}>{id}</Text>
          <Text style={styles.postTime}>{email}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="heart"
            size={20}
            color={iconColor}
            style={styles.likeIcon}
            onPress={() => {
              likePressed ? seticonColor("black") : seticonColor("red");
              setlikePressed(!likePressed);
            }}
          />
        </View>
      </View>
      <View style={styles.midSection}>
        <Image source={{ uri: url }} style={styles.mainImage} />
      </View>
      <View style={styles.bottomSection}>
        <TextInput placeholder="say something" style={styles.commentTextBox} />
        <View style={styles.iconContainer}>
          <Icon name="link" size={20} />
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 0.5,
    margin: 5,
  },
  topSection: {
    flexDirection: "row",
    marginBottom: 10,
    marginRight: 15,
  },
  innerTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 20,
  },
  profileName: {
    fontWeight: "bold",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  iconContainer: {
    justifyContent: "center",
    marginLeft: "auto",
  },
  midSection: {
    marginBottom: 10,
  },
  mainImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  bottomSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  commentTextBox: {
    borderColor: "#cdcdcd",
    borderWidth: 1,
    width: "90%",
    height: 35,
    paddingLeft: 5,
    fontSize: 14,
    borderRadius: 20,
    marginRight: 2,
  },
});
