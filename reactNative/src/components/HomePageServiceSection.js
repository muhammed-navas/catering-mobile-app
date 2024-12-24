import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function SettingSection({
  title,
  content,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.title}>{title}</Text>
        <Icon
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={24}
          color="#333"
        />
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.content}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 16,
  },
  contentText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
