import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import gift from '../../assets/gift.png'
import enjoy from '../../assets/enjoy.png'
import ImageCarousel from "../components/SlideImage";

const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="user" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>THE ROUNDS</Text>
          <TouchableOpacity>
            <Icon name="bell" size={26} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Birthday Gifts</Text>
          <Text style={styles.subtitle}>Time to celebrate!</Text>
          <Image source={gift} style={styles.image} />
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>Catering Event </Text>

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
        <View style={styles.lastSection}>
          <Text style={styles.life}>Become a Member Then Enjoy LifeTime</Text>
          <Image source={enjoy} style={styles.lastImage} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    paddingTop: 40,
  },
  // .......................
  card: {
    backgroundColor: "#c7cad4",
    borderRadius: 22,
    padding: 16,
    width: "100%",
    height: 200,
    position: "relative",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#4A4A4A",
    marginBottom: 12,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "flex-end",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  // .......................
  slideCard:{
    width: "100%"
  },
  lastImage:{
    width:300,
    height:300,
    objectFit: "cover"
  },
  life:{
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  lastSection:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:40,
  },
  // .......................
  heroSection: {
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: "700",
    lineHeight: 56,
    letterSpacing: -1,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color: "#333",
    marginTop: 20,
    maxWidth: "100%",
  },
});

export default HomeScreen;
