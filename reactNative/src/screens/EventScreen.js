import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

 const events = [
   {
     id: "1",
     title: "Wedding Event",
     location: "Garden Auditorium",
     count: 156,
     image:
       "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
   },
   {
     id: "2",
     title: "Nikah Event",
     location: "Family Auditorium",
     count: 342,
     //  image:
     //    "https://img.freepik.com/free-vector/abstract-smooth-gradient-background-with-blur-effect_1017-51593.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
     image:
       "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
   },
   {
     id: "2",
     title: "Nikah Event",
     location: "Family Auditorium",
     count: 342,
     //  image:
     //    "https://img.freepik.com/free-vector/abstract-smooth-gradient-background-with-blur-effect_1017-51593.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
     image:
       "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
   },
   {
     id: "2",
     title: "Nikah Event",
     location: "Family Auditorium",
     count: 342,
     //  image:
     //    "https://img.freepik.com/free-vector/abstract-smooth-gradient-background-with-blur-effect_1017-51593.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
     image:
       "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
   },
   // Add more events as needed
 ];

const EventCard = ({ title, location, count, image  }) => {

    const navigation = useNavigation();

    const clickHandle = () =>{
        navigation.navigate("EventDetails");
    }
  return (
    <TouchableOpacity style={styles.card} onPress={clickHandle}>
      {/* <View style={styles.labelContainer}>
        <Text style={styles.label}>Social</Text>
      </View> */}

      <View style={styles.cardMain}>
        <Image
          source={{ uri: image }}
          style={styles.cardImage}
          resizeMode="cover"
        />

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {title}
          </Text>

          <View style={styles.infoContainer}>
            <View style={styles.locationContainer}>
              <Icon name="location-on" size={16} color="#666" />
              <Text style={styles.locationText}>{location}</Text>
            </View>

            <View style={styles.attendeeContainer}>
              <Icon name="people" size={16} color="#666" />
              <Text style={styles.attendeeText}>
                {" "}
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {count}
                </Text>{" "}
                Availability
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>Find out more</Text>
        <Icon name="chevron-right" size={20} color="#666" />
      </View>
    </TouchableOpacity>
  );
};

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search"
      placeholderTextColor="#666"
    />
  </View>
);

const ActionButton = ({ label, count }) => (
  <View style={styles.actionButtonContainer}>
    <Text style={styles.actionLabel}>{label}</Text>
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.actionText}>{count}</Text>
    </TouchableOpacity>
  </View>
);

const EventScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.topSection}>
      <Text style={styles.headerText}>All Events Show</Text>
      <SearchBar />
      <View style={styles.actionButtons}>
        <ActionButton label="Total Events" count="5" />
        <ActionButton label="Total Active" count="3" />
      </View>
    </View>

    <ScrollView style={styles.eventsList}>
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          location={event.location}
          count={event.count}
          image={event.image}
        />
      ))}
    </ScrollView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topSection: {
    backgroundColor: "#B2C9AD",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
    paddingTop: 50,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  actionButtonContainer: {
    alignItems: "center",
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  actionButton: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 25,
    minWidth: 100,
    alignItems: "center",
  },
  actionText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  eventsList: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardMain: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  card: {
    backgroundColor: "#f0f7ff",
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  labelContainer: {
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },
  cardMain: {
    padding: 16,
  },
  cardImage: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardContent: {
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    fontSize: 14,
    color: "#666",
  },
  attendeeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  attendeeText: {
    fontSize: 14,
    color: "#666",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.1)",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
});

export default EventScreen;
