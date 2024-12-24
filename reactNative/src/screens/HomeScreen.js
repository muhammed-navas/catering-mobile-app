import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.topSection}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
              }}
              style={styles.avatar}
            />
            <View style={styles.greeting}>
              <Text style={styles.greetingText}>Hi 🖐</Text>
              <Text style={styles.userName}>Reze</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notification}>
            <Icon name="bell" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Feeling Section */}
        <View style={styles.feelingSection}>
          <Text style={styles.feelingTitle}>Exceeding Event Expectations</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="heart" size={20} color="#666" />
            <Text style={styles.actionText}>Checkup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="message-circle" size={20} color="#666" />
            <Text style={styles.actionText}>Consult</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Condition Section */}
      <View style={styles.conditionSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Events Sections</Text>
          <View style={styles.healthTag}>
            <Icon name="activity" size={12} color="#007AFF" />
            <Text style={styles.healthText}>Feel It</Text>
          </View>
        </View>

        {/* Organ Grid */}
        <View style={styles.organGrid}>
          <TouchableOpacity style={styles.organCard}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/office-workers-coworkers-having-fun-together-corporate-party-special-event-celebration-business-success-company-staff-colleagues-festive-hats_335657-3561.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
              }}
              style={styles.organImage}
            />
            <View style={styles.bottomOverlay}>
              <Text style={styles.overlayText}>Event Title</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.organCard}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/people-celebrating-thanksgiving-concept-illustration_114360-3638.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
              }}
              style={[styles.organImage, styles.heartImage]}
            />
            <View style={styles.bottomOverlay}>
              {/* Text content */}
              <Text style={styles.overlayText}>Event Title</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.organCard}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/hand-drawn-flat-design-family-scenes_52683-72897.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
              }}
              style={styles.organImage}
            />
            <View style={styles.bottomOverlay}>
              {/* Text content */}
              <Text style={styles.overlayText}>Event Title</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.organCard}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/bakers-preparing-wedding-birthday-cake_74855-5219.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
              }}
              style={styles.organImage}
            />
            <View style={styles.bottomOverlay}>
              {/* Text content */}
              <Text style={styles.overlayText}>Event Title</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.organCard}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/cocktail-party-concept-illustration_114360-9603.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
              }}
              style={styles.organImage}
            />
            <View style={styles.bottomOverlay}>
              {/* Text content */}
              <Text style={styles.overlayText}>Event Title</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.organCard}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/catering-service-concept-illustration_114360-7608.jpg?uid=R179782123&ga=GA1.1.1661294206.1732189762&semt=ais_hybrid",
              }}
              style={styles.organImage}
            />
            <View style={styles.bottomOverlay}>
              {/* Text content */}
              <Text style={styles.overlayText}>Event Title</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topSection: {
    backgroundColor: "#B2C9AD",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 25, // Android shadow
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset
    shadowOpacity: 0.3, // iOS shadow opacity
    shadowRadius: 6, // iOS shadow blur radius
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 12,
  },
  greeting: {
    flexDirection: "column",
  },
  greetingText: {
    fontSize: 14,
    color: "#666",
  },
  userName: {
    fontSize: 18,
    fontWeight: "800",
  },
  feelingSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  feelingTitle: {
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 40,
  },
  notification: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 40,
    padding: 6,
  },
  actionButtons: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginRight: 10,
  },
  primaryButton: {
    backgroundColor: "#007AFF",
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#666",
  },
  conditionSection: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  organCard: {
    width: "48%",
    aspectRatio: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 25, // Android shadow
    shadowColor: "#000", // Orange shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset
    shadowOpacity: 0.3, // iOS shadow opacity
    shadowRadius: 6, // iOS shadow blur radius
  },
  organImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "20%", // Adjust height for the overlay at the bottom
    backgroundColor: "rgba(0, 0, 0, 0.53)",
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
    borderRadius: 30,
  },
  overlayText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 10,
  },
  healthTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F2FF",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  healthText: {
    fontSize: 12,
    color: "#007AFF",
    marginLeft: 4,
  },
  organGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  organLabel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 12,
  },
  organText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default HomeScreen;
