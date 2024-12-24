import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import ConformPopup from "../components/ConformPopup";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const servicesItems = [
  {
    id: 1,
    title: "Engine Oil",
    icon: "build",
    count: 0,
    backgroundColor: "#F5F5F5",
  },
  {
    id: 2,
    title: "Radiator Fluid",
    icon: "opacity",
    count: 0,
    backgroundColor: "#0052FF",
  },
  {
    id: 3,
    title: "Battery",
    icon: "battery-full",
    count: 0,
    backgroundColor: "#F5F5F5",
  },
  {
    id: 4,
    title: "Washer Fluid",
    icon: "opacity",
    count: 0,
    backgroundColor: "#F5F5F5",
  },
  {
    id: 4,
    title: "Washer Fluid",
    icon: "opacity",
    count: 0,
    backgroundColor: "#F5F5F5",
  },
  {
    id: 4,
    title: "Washer Fluid",
    icon: "opacity",
    count: 0,
    backgroundColor: "#F5F5F5",
  },
];
const getCurrentDate = () => {
    const now = new Date();
    return {
        current: months[now.getMonth()],
        previous: months[(now.getMonth() - 1 + 12) % 12],
        twoMonthsAgo: months[(now.getMonth() - 2 + 12) % 12],
    };
};

const ServiceCard = ({ title, icon, count, backgroundColor }) => {
        const [isOpen,setIsOpen] = useState(false)
          const handleOpenPopup = () => setIsOpen(true);
          const handleClosePopup = () => setIsOpen(false);
          const handleSubmit = () => {
            // Handle submit logic here
            setIsOpen(false); // Close popup after submission
          };
    return (
      <>
        <TouchableOpacity
          onPress={() => setIsOpen(true)}
          style={[styles.card, { backgroundColor }]}
        >
          <Icon
            name={icon}
            size={24}
            color={backgroundColor === "#0052FF" ? "#FFFFFF" : "#000000"}
            style={styles.cardIcon}
          />
          <Text
            style={[
              styles.cardTitle,
              { color: backgroundColor === "#0052FF" ? "#FFFFFF" : "#000000" },
            ]}
          >
            {title}
          </Text>
          <View style={styles.countContainer}>
            <Text
              style={[
                styles.count,
                {
                  color: backgroundColor === "#0052FF" ? "#FFFFFF" : "#000000",
                },
              ]}
            >
              {count}
            </Text>
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
}

const EventDetails = ({ navigation }) => {
  const dates = getCurrentDate();
  const chartData = [
    { month: dates.twoMonthsAgo, requests: 123, color: "#D9ED92" },
    { month: dates.previous, requests: 97, color: "orange" },
    { month: dates.current, requests: 174, color: "#5B9BF7" },
  ];

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
        style={{ marginBottom: 30 }}
      />
      {/* <Text style={styles.headerTitle}>Employment chart</Text> */}

      <View style={styles.chartContainer}>
        {chartData.map((item, index) => (
          <View key={index} style={styles.monthColumn}>
            <View
              style={[
                styles.bar,
                { backgroundColor: item.color, height: item.requests },
              ]}
            />
            <View style={styles.monthInfo}>
              <Icon
                name="circle"
                size={8}
                color={item.color === "#FFFFFF" ? "#000" : item.color}
              />
              <Text style={styles.monthText}>{item.month}</Text>
              <Text style={styles.requestText}>{item.requests} requests</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <View style={styles.emoji}>
          <Text style={styles.footerText}>How Are You Feel Today ?</Text>
          <View style={styles.emojiBg}>
            <Text style={styles.emojiStyle}>😁</Text>
            <Text style={styles.emojiStyle}>😊</Text>
            <Text style={styles.emojiStyle}>😌</Text>
            <Text style={styles.emojiStyle}>😍</Text>
            <Text style={styles.emojiStyle}>😜</Text>
            <Text style={styles.emojiStyle}>😪</Text>
          </View>
        </View>
      </View>
      <View style={styles.feel}>
        <View style={styles.footerContent}>
          <Icon name="trending-up" size={20} color="white" />
          <Text style={[styles.footerText, { color: "white" }]}>
            Choose Your Working Category
          </Text>
          {/* <Icon name="chevron-right" size={20} color="#000" /> */}
        </View>
      </View>

      <View style={styles.grid}>
        {servicesItems.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
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
    borderTopWidth: 1,
    borderTopColor: "#d3d6de",
    paddingTop: 15,
    marginTop: 10,
  },
  feel: {
    padding: 10,
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
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
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
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
});

export default EventDetails;
