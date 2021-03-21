import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../components/Post";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});