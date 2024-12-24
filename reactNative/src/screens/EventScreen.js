import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EventScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Event Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A0080",
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
});
