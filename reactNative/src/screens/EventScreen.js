import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const services = [
  {
    id: "1",
    title: "Medieval Character",
    description: "Historical character visualization",
    image:
      "https://img.freepik.com/free-photo/3d-illustration-medieval-historical-character_183364-81199.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
  },
  {
    id: "2",
    title: "Character Design",
    description: "Custom character creation",
    image:
      "https://img.freepik.com/free-photo/3d-illustration-medieval-historical-character_183364-81199.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
  },
  {
    id: "3",
    title: "3D Modeling",
    description: "Professional 3D designs",
    image:
      "https://img.freepik.com/free-photo/3d-illustration-medieval-historical-character_183364-81199.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
  },
];

const ServiceCard = ({ title, description, image }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ServiceDetails")}
    >
      <View style={styles.cardContent}>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <Icon
          name="arrow-forward"
          size={20}
          color="#666"
          style={styles.cardIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const EventScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Reduce your{"\n"}to-do list.</Text>
      <Text style={styles.headerSubtitle}>Leave these services to us.</Text>
    </View>

    <View style={styles.servicesContainer}>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    padding: 24,
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
  servicesContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "#F5F5F7",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
  },
  cardContent: {
    padding: 16,
  },
  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  cardIcon: {
    alignSelf: "flex-end",
  },
});

export default EventScreen;
