import React from "react";
import { StyleSheet,View, ImageBackground, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export function Background({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/four.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {" "}
        {children}{" "}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
  },
  backgroundImage: {
    flex: 1,
  },
});
