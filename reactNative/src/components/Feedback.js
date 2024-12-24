import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback ?</Text>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Icon
              name={star <= rating ? "star" : "star-outline"}
              size={24}
              color={star <= rating ? "#FFD700" : "#ccc"}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        value={feedback}
        onChangeText={setFeedback}
        placeholder="Write your feedback here..."
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: "#4A148C",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "500",
  },
});
