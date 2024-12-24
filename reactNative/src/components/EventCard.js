import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.6;

export default function EventCard({ imageUrl, title, subtitle }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    marginRight: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: CARD_WIDTH,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
