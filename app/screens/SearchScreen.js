import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { COLORS } from "../config/colors";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView>
      <Searchbar
        style={styles.input}
        placeholder="Enter your search here"
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
        value={searchQuery}
        iconColor={COLORS.primaryColor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    borderColor: "#cdcdcd",
  },
});

export default SearchScreen;
