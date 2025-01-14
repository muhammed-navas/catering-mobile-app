import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Background from "../components/Background";

export default function SplashScreen() {
  return (
   <Background > 
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/128/9099/9099152.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Blue Bury Star</Text>
      <Text style={styles.subtitle}>
        Truth Is The Greatest Belief In This World
      </Text>
    </View>
   </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
