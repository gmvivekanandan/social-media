import firebase, { firestore } from "firebase";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import { SafeAreaView } from "react-native-safe-area-context";
import { List } from "@ui-kitten/components";
import Post from "../components/Post";
import { COLORS } from "../config/colors";

const HomeScreen = ({ route }) => {
  const [iconColor, seticonColor] = useState("black");
  const [likePressed, setlikePressed] = useState(false);
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFeed = async () => {
    const snapshot = await firestore()
      .collection("users")
      .doc("xU5pJ7oVeoRR79VYXYYYoHxaeot2")
      .collection("userfollowing")
      .onSnapshot((snapshotDoc) => {
        const feedArray = [];
        snapshotDoc.forEach((doc) => {
          const uid = doc.id;
          firestore()
            .collection("users")
            .doc(uid)
            .collection("posts")
            .onSnapshot((posts) => {
              posts.forEach((post) => {
                console.log(post.data());
                feedArray.push({ ...post.data(), key: post.id });
              });
            });
        });
        setFeed(feedArray);
      });
  };

  useEffect(() => {
    getFeed();
  }, []);

  /*useEffect(() => {
    const feedFunction = firebase
      .firestore()
      .collection("users")
      .doc("xU5pJ7oVeoRR79VYXYYYoHxaeot2")
      .collection("userfollowing")
      .onSnapshot((snapShot) => {
        const feedArray = [];
        snapShot.forEach((docSnapShot) => {
          const data = { uid: docSnapShot.id };
          const uid = data.uid;
          firebase
            .firestore()
            .collection("users")
            .doc(uid)
            .collection("posts")
            .onSnapshot((snapShot) => {
              snapShot.forEach((docSnapShot) => {
                feedArray.push({ ...docSnapShot.data(), key: docSnapShot.id });
              });
            });
        });
        setFeed(feedArray);
      });
    return () => feedFunction();
  }, []);
  console.log(feed);*/

  const renderFunction = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{
            uri: "https://i.dlpng.com/static/png/5065892-my-profile-icon-png-327283-free-icons-library-profile-icon-png-500_500_preview.png",
          }}
          style={styles.profileImage}
        />
        <View style={styles.innerTextContainer}>
          <Text style={styles.profileName}>{item.uid}</Text>
          <Text style={styles.postTime}>{item.uid}</Text>
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
        <Image source={{ uri: item.imageurl }} style={styles.mainImage} />
      </View>
      <View style={styles.bottomSection}>
        <TextInput placeholder="say something" style={styles.commentTextBox} />
        <View style={styles.iconContainer}>
          <Icon name="link" size={20} />
        </View>
      </View>
    </View>
  );
  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Feed</Text>
      <List
        data={feed}
        keyExtractor={(item) => item.key}
        renderItem={renderFunction}
        //<Post url={item.imageurl} />
        //<Image source={{ uri: item.imageurl }} style={styles.image} />
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primaryColor,
    padding: 10,
  },
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
