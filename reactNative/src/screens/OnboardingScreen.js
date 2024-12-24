import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/MaterialIcons";

export default function OnboardingScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);

  const onboardingData = [
    {
      title: "Welcome to Blue Bury Star",
      description:
        "A small catering service specializes in providing fresh, delicious meals for intimate gatherings and events.",
    },
    {
      title: "Customized Service",
      description:
        "Their menu features a range of customized dishes, from savory appetizers to decadent desserts, tailored to fit client preferences.",
    },
  ];

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>{onboardingData[currentPage].title}</Text>
        <Text style={styles.description}>
          {onboardingData[currentPage].description}
        </Text>
        <View style={styles.dotContainer}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === currentPage ? "orange" : "white" },
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <View style={styles.buttonContent}>
            <Text style={styles.nextButtonText}>Next</Text>
            <Icon name="arrow-forward" size={20} color="#4A148C" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    backgroundColor: "#4A148C",
    height: "60%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
    justifyContent: "center",
  },
  bottomSection: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    justifyContent: "center",
    left: 0,
    right: 0,
    gap: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    marginHorizontal: 0, // Space between dots
  },
  nextButton: {
    alignSelf: "flex-end",
    backgroundColor: "#c2ccca",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonContent: {
    flexDirection: "row", // Align text and icon horizontally
    alignItems: "center", // Center align items vertically
  },
  nextButtonText: {
    color: "#4A148C",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8, // Add space between text and icon
  },
});
