import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EventCard from "../components/EventCard";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: "https://via.placeholder.com/40" }}
              style={styles.avatar}
            />
            <Text style={styles.greeting}>Hi, Muhammed</Text>
          </View>
          <Icon name="bell" size={24} color="#fff" />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Exceeding Event{"\n"}Expectations</Text>
          <Text style={styles.subtitle}>
            When designing food delivery app user interfaces, the apps that give
            clear directions for users to follow with clearer layouts are the
            ones that are most successful.
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardContainer}
          >
            <EventCard
              imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
              title="5000+ Event Full"
              subtitle="Decoration Setting"
            />
            <EventCard
              imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
              title="5000+ Event Full"
              subtitle="Decoration Setting"
            />
            <EventCard
              imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
              title="5000+ Event Full"
              subtitle="Decoration Setting"
            />
            <EventCard
              imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
              title="5000+ Event Full"
              subtitle="Decoration Setting"
            />
            <EventCard
              imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
              title="5000+ Event Full"
              subtitle="Decoration Setting"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A0080",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
    marginBottom: 24,
  },
  cardContainer: {
    marginLeft: -20,
    paddingLeft: 20,
  },
});
