import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../components/Post";
import Stories from "../components/Stories";
import { COLORS } from "../config/colors";

const HomeScreen = ({ route }) => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Feed</Text>
      <ScrollView>
        <Stories />
        <Post id="vivek" email="today" />
        <Post id="rahul" email="today" />
        <Post id="saran" email="today" />
      </ScrollView>
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
});
