import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import ConformPopup from "../components/ConformPopup";
import {
  useFonts,
  rubik_100Thin,
  rubik_400Regular,
  rubik_500Medium,
  rubik_700Bold,
} from "@expo-google-fonts/rubik";

const servicesItems = [
  {
    id: 1,
    title: "welcome Drinks",
    icon: <Entypo name="drink" size={24} />,
    count: 0,
  },
  {
    id: 2,
    title: "Suppliers",
    icon: "opacity",
    count: 0,
    backgroundColor: "#0052FF",
  },
  {
    id: 3,
    title: "VIP Section",
    icon: "battery-full",
    count: 0,
  },
  {
    id: 4,
    title: "Cleaners",
    icon: "opacity",
    count: 0,
  },
  {
    id: 4,
    title: "Managers",
    icon: "opacity",
    count: 0,
  },
  {
    id: 4,
    title: "Decoration",
    icon: "opacity",
    count: 0,
  },
];

const ServiceCard = ({ title, icon, count, backgroundColor }) => {
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenPopup = () => setIsOpen(true);
  const handleClosePopup = () => setIsOpen(false);
  const handleSubmit = () => {
    // Handle submit logic here
    navigation.navigate("MainApp", {
      screen: "My Event",
    });
    setIsOpen(false);
  };
  return (
    <>
      <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.card}>
        <View style={styles.cardIcon}>{icon}</View>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{count}</Text>
        </View>
        {isOpen && (
          <ConformPopup
            isOpen={isOpen}
            onClose={handleClosePopup}
            onSubmit={handleSubmit}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

const EventDetails = ({ navigation }) => {
   const [fontsLoaded] = useFonts({
      rubik_100Thin,
      rubik_400Regular,
      rubik_500Medium,
      rubik_700Bold,
    });

  return (
    <ScrollView style={styles.container}>
      <Icon
        onPress={() =>
          navigation.navigate("MainApp", {
            screen: "EventTab",
          })
        }
        name="chevron-left"
        size={40}
        color="black"
        style={{ marginBottom: 10 }}
      />
      {/* <Text style={styles.headerTitle}>Employment chart</Text> */}

      <View style={styles.search}>
        <Icon name="search" size={20} color="#777" style={styles.searchIcon} />

        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          // value={searchQuery}
          // onChangeText={setSearchQuery}
          placeholderTextColor="#777"
        />
      </View>

      <View style={styles.feel}>
        <Text style={styles.textHead}>Choose Your Category</Text>
        <Text style={styles.textPhara}>
          Explore exciting events in our working category! Join upcoming
          webinars, workshops, and more. Click below to register or set a
          reminder for your favorite events.
        </Text>
      </View>

      <View style={styles.grid}>
        {servicesItems.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFFFFF",
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
    alignItems: "flex-end",
    marginBottom: 20,
  },
  monthColumn: {
    flex: 1,
    alignItems: "center",
  },
  bar: {
    width: "60%",
    borderRadius: 8,
    marginBottom: 10,
  },
  monthInfo: {
    alignItems: "center",
  },
  monthText: {
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 4,
  },
  requestText: {
    fontSize: 12,
    color: "#666",
  },
  footer: {
    paddingTop: 15,
    marginTop: 10,
  },
  feel: {
    padding: 10,
  },
  textHead: {
    fontSize: 21,
    fontWeight: "800",
    fontFamily: "rubik_700Bold",
  },
  textPhara: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
    fontFamily: "rubik_700Bold",
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e6e4e1",
    padding: 12,
    borderRadius: 12,
  },
  emoji: {
    backgroundColor: "#F8F9FA",
    padding: 12,
    height: 90,
    borderRadius: 12,
  },
  footerText: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
  },
  emojiBg: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  emojiStyle: {
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  card: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e4e1",
    // elevation: 2,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "900",
    fontFamily: "rubik_700Bold",
  },
  countContainer: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  count: {
    fontSize: 12,
    fontWeight: "500",
  },
  // ...............................
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 45,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: "#80C4E9",
    borderWidth: 1,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: "rubik_400Regular",
    fontSize: 16,
    color: "#000",
    padding: 0,
  },
  // ...............................
});

export default EventDetails;
