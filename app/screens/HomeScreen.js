import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Post from "../components/Post";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
