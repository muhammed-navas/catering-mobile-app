import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";
import Icon from "react-native-vector-icons/Feather";
import ImageCarousel from "../components/SlideImage";
import Background from "../components/Background";
import DateInHome from "../components/DateInHome";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cardSome}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.round}>
                <Icon name="user" size={24} color="#333" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>THE ROUNDS</Text>
              <TouchableOpacity style={styles.round}>
                <Icon name="bell" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            <View style={styles.dreamContainer}>
              <Text style={styles.dream}>
                Choose Your Best Dream Better Than Your Time
              </Text>
            </View>
            <View style={styles.search}>
              <Icon
                name="search"
                size={20}
                color="#777"
                style={styles.searchIcon}
              />
              <Text style={styles.searchPlaceholder}>Search...</Text>
            </View>
          </View>

          <View style={styles.cards}>
            {[1, 2].map((_, index) => (
              <View key={index} style={styles.middle}>
                <Text style={styles.cardTitle}>Wedding Event</Text>
                <View style={styles.place}>
                  <Text style={styles.cardText}>Malappuram</Text>
                  <Text style={styles.cardText}>Total Count: 20</Text>
                </View>
              </View>
            ))}
          </View>

          <DateInHome />

          <View style={styles.content}>
            <View style={styles.heroSection}>
              <Text style={styles.heroTitle}>Who We Are</Text>
              <Text style={styles.description}>
                The one-stop shop for managing your everyday essentials and
                sustainable lifestyle. The one-stop shop for managing your
                everyday essentials and sustainable lifestyle.
              </Text>
            </View>

            <SafeAreaView style={styles.slideCard}>
              <ImageCarousel />
            </SafeAreaView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  round: {
    borderColor: "#80C4E9",
    borderRadius: 40,
    borderWidth: 1,
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Outfit_700Bold",
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    paddingVertical: 10,
  },
  cardSome: {
    borderRadius: 30,
    padding: 20,
    marginTop: 40,
    borderColor: "#80C4E9",
    borderWidth: 1,
    height: 250,
  },
  dreamContainer: {
    marginBottom: 20,
  },
  dream: {
    fontFamily: "Outfit_500Medium",
    fontSize: 25,
    lineHeight: 36,
    color: "#333",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#80C4E9",
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchPlaceholder: {
    fontFamily: "Outfit_400Regular",
    color: "#777",
    fontSize: 16,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    marginVertical: 15,
  },
  middle: {
    flex: 1,
    borderColor: "#80C4E9",
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "Outfit_500Medium",
    textAlign: "center",
    marginBottom: 10,
  },
  place: {
    alignItems: "center",
  },
  cardText: {
    fontSize: 14,
    fontFamily: "Outfit_400Regular",
    textAlign: "center",
  },
  slideCard: {
    width: "100%",
    marginBottom: 80,
  },
  heroSection: {
    marginBottom: 30,
  },
  heroTitle: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: "Outfit_500Medium",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    fontFamily: "Outfit_400Regular",
  },
});

export default HomeScreen;
