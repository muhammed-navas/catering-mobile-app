import React from "react";
import { StyleSheet, ImageBackground, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/four.png")} 
      style={styles.backgroundImage}
      resizeMode="cover" 
    >
      {" "}
      {children}{" "}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
