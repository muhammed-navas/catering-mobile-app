import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";
import { useNavigation } from "@react-navigation/native";
// import {Background} from "../components/Background";
import Icon from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const events = [
  {
    _id: "1",
    name: "Medieval Fair",
    place: "Valluvambram",
    auditorium: "Family Auditorium Valluvambram",
    totalCount: 500,
    description:
      "Experience the charm of medieval times with authentic food, costumes, and activities.",
  },
  {
    _id: "2",
    name: "Comic Con",
    place: "Convention Center",
    auditorium: "Family Auditorium Valluvambram",
    totalCount: 10000,
    description:
      "The ultimate gathering for comic book fans, cosplayers, and pop culture enthusiasts.",
  },
  {
    _id: "3",
    name: "Food Festival",
    auditorium: "Family Auditorium Valluvambram",
    place: "City Park",
    totalCount: 2000,
    description:
      "Savor diverse cuisines from around the world in one delicious event.",
  },
  {
    _id: "4",
    name: "Tech Expo",
    auditorium: "Family Auditorium Valluvambram",
    place: "Innovation Hub",
    totalCount: 3000,
    description:
      "Discover the latest in technology and gadgets from leading companies.",
  },
  {
    _id: "5",
    name: "Music Festival",
    auditorium: "Family Auditorium Valluvambram",
    place: "Riverside Amphitheater",
    totalCount: 15000,
    description:
      "Three days of non-stop music featuring top artists across various genres.",
  },
];

const EventCard = ({ name, place, totalCount, description, auditorium }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
            paddingBottom: 6,
            backgroundColor: "#e6e4e1",
            borderBottomColor: "#80C4E9",
            borderBottomWidth: 1,
           
          }}
        >
          <Text style={styles.cardName}>{name}</Text>
          <Text style={styles.cardPlace}>
            {" "}
            <Entypo
              name="location-pin"
              size={15}
              style={{ marginRight: 5 }}
              color="#777"
            />
            {place}
          </Text>
        </View>
        <Text style={styles.venue}>
          {" "}
          <FontAwesome
            name="venus"
            size={17}
            color="#777"
            style={{ marginRight: 5 }}
          />
          {auditorium}
        </Text>
        <Text style={styles.cardCount}>
          {" "}
          <MaterialCommunityIcons
            name="account-check-outline"
            size={17}
            color="#777"
            style={{ marginRight: 5 }}
          />
          Total Attendees: {totalCount}
        </Text>
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
    const [fontsLoaded] = useFonts({
      Outfit_400Regular,
      Outfit_500Medium,
      Outfit_700Bold,
    });

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // <Background>
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row", gap: 5, marginTop: 60 }}>
        {[
          { name: "Total Event", num: 5 },
          { name: "Completed Event Slot", num: 2 },
          { name: "Balanced Event Slot", num: 3 },
        ].map((item, i) => (
          <View
            style={{
              width: 70,
              height: 70,
              // borderColor: "#80C4E9",
              backgroundColor: "#e6e4e1",
              // borderWidth: 1,
              borderRadius: 10,
              marginBottom: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Outfit_400Regular",
              }}
            >
              {item.name} {"\n"}{" "}
              {i === 0
                ? events.length
                : i === 1
                ? events.length - 3
                : i === 2
                ? events.length - 2
                : null}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.search}>
        <Icon name="search" size={20} color="#777" style={styles.searchIcon} />

        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#777"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
        <Text style={styles.headerSubtitle}>
          Don't miss out on these exciting gatherings!
        </Text>
      </View>

      <View style={styles.eventsContainer}>
        {filteredEvents.map((event) => (
          <EventCard
            key={event._id}
            name={event.name}
            place={event.place}
            auditorium={event.auditorium}
            totalCount={event.totalCount}
            description={event.description}
          />
        ))}
      </View>
    </ScrollView>
    // </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
    paddingHorizontal: 10,
  },
  header: {
    paddingTop: 20,
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
    backgroundColor: "#e6e4e1",
    opacity: 0.7,
    // borderColor: "#80C4E9",
    // borderWidth: 1,
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
    fontFamily: "Outfit_400Regular",
    flex: 1,
  },
  cardPlace: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 8,
    fontFamily: "Outfit_400Regular",
    textAlign: "right",
    flexShrink: 1,
  },
  venue: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: "Outfit_400Regular",
  },
  cardCount: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 8,
    fontFamily: "Outfit_400Regular",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
    fontFamily: "Outfit_400Regular",
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
    paddingVertical:15,
    borderColor: "#80C4E9",
    borderWidth: 1,
    marginTop: 10,
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
