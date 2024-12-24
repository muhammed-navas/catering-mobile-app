import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Navigation */}
      <View style={styles.header}>
        <Icon name="chevron-left" size={24} color="#000" />
        <Icon name="chevron-right" size={24} color="#000" />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Bessie Cooper</Text>
        <Text style={styles.email}>coopers3@hotmail.com</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={[styles.statBox, { backgroundColor: "#E8E0FF" }]}>
          <Text style={styles.statNumber}>14</Text>
          <Text style={styles.statLabel}>Active</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: "#F5F5F5" }]}>
          <Text style={styles.statNumber}>06</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: "#F5F5F5" }]}>
          <Text style={styles.statNumber}>25</Text>
          <Text style={styles.statLabel}>Complete</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Icon name="user" size={20} color="#9B51E0" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Username</Text>
              <Text style={styles.menuSubtitle}>@cooper_bessie</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Icon name="bell" size={20} color="#9B51E0" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Notifications</Text>
              <Text style={styles.menuSubtitle}>Mute, Push, Email</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Icon name="settings" size={20} color="#9B51E0" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Settings</Text>
              <Text style={styles.menuSubtitle}>Security, Privacy</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={20} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    marginBottom: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statBox: {
    width: "30%",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuTextContainer: {
    marginLeft: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  menuSubtitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
});

export default ProfileScreen;
