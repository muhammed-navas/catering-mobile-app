import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

// const { width } = Dimensions.get("window");
export function Background({ children }) {
  return (
      <ImageBackground
        source={require("../../assets/four.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>

  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
