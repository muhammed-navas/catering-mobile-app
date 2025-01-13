import React, { useState } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

export default function ButtonTextFit({ title, onPress }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.navigationButtons}>
      <Pressable
        style={[
          styles.navButton,
          isHovered && styles.navButtonHover, 
        ]}
        onPress={onPress}
        onPressIn={() => setIsHovered(true)} 
        onPressOut={() => setIsHovered(false)} 
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#CDC1FF",
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonHover: {
    backgroundColor: "#B8A8FF",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
