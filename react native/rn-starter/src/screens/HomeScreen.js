import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Updated</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "300"
  }
});

export default HomeScreen;
