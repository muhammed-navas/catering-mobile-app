import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");

export default function OnboardingScreen({ navigation }) {
  const handleExplore = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Creatives of the next generation</Text>
        </View>

        <View style={styles.decorativeElements}>
          <View style={styles.redCircle} />
          <View style={styles.redCircle1} />
          <View style={styles.redCircle2} />
        </View>
      </View>

      <TouchableOpacity style={styles.exploreButton} onPress={handleExplore}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  content: {
    flex: 1,
    // justifyContent: "center",
  },
  titleContainer: {
    marginTop: 150,
    // width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  titleText: {
    fontSize: 60,
    fontWeight: "700",
    color: "#000",
    lineHeight: 58,
    // textAlign: "center",
  },
  decorativeElements: {
    position: "relative",
    flex: 1,
  },
  redCircle: {
    position: "absolute",
    right: -90,
    bottom: 100,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#FF4B36",
    opacity: 0.9,
  },
  redCircle1: {
    position: "absolute",
    left: -90,
    bottom: 280,
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "#445c42",
    opacity: 0.9,
  },
  redCircle2: {
    position: "absolute",
    left: -130,
    bottom: -170,
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: "#3f2357",
    opacity: 0.9,
  },
  exploreButton: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
