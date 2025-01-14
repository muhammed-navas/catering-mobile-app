import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../components/Background";
import Icon from "react-native-vector-icons/Feather";

const events = [
  {
    id: "1",
    name: "Medieval Fair",
    place: "Castle Grounds",
    totalCount: 500,
    description:
      "Experience the charm of medieval times with authentic food, costumes, and activities.",
  },
  {
    id: "2",
    name: "Comic Con",
    place: "Convention Center",
    totalCount: 10000,
    description:
      "The ultimate gathering for comic book fans, cosplayers, and pop culture enthusiasts.",
  },
  {
    id: "3",
    name: "Food Festival",
    place: "City Park",
    totalCount: 2000,
    description:
      "Savor diverse cuisines from around the world in one delicious event.",
  },
  {
    id: "4",
    name: "Tech Expo",
    place: "Innovation Hub",
    totalCount: 3000,
    description:
      "Discover the latest in technology and gadgets from leading companies.",
  },
  {
    id: "5",
    name: "Music Festival",
    place: "Riverside Amphitheater",
    totalCount: 15000,
    description:
      "Three days of non-stop music featuring top artists across various genres.",
  },
];

const EventCard = ({ name, place, totalCount, description }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardPlace}>{place}</Text>
        <Text style={styles.cardCount}>Total Attendees: {totalCount}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <TouchableOpacity
          style={styles.viewMoreButton}
          onPress={() => navigation.navigate("EventDetails")}
        >
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const EventScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Background>
      <ScrollView style={styles.container}>
        <View style={styles.search}>
          <Icon
            name="search"
            size={20}
            color="#777"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#777"
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Upcoming{"\n"}Events</Text>
          <Text style={styles.headerSubtitle}>
            Don't miss out on these exciting gatherings!
          </Text>
        </View>

        <View style={styles.eventsContainer}>
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              name={event.name}
              place={event.place}
              totalCount={event.totalCount}
              description={event.description}
            />
          ))}
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
    paddingHorizontal: 10,
  },
  header: {
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
    lineHeight: 40,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 24,
  },
  eventsContainer: {
    // padding: 16,

  },
  card: {
    // backgroundColor: "#A0D683",
    borderColor: "#80C4E9",
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
  },
  cardContent: {
    padding: 16,
  },
  cardName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 4,
  },
  cardPlace: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 8,
  },
  cardCount: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  viewMoreButton: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  viewMoreText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  // ...............................
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 45,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#80C4E9",
    borderWidth: 1,
    marginTop: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Outfit_400Regular",
    fontSize: 16,
    color: "#000",
    padding: 0,
  },
  // ...............................
});

export default EventScreen;
