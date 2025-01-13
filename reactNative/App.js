import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
// import { StatusBar } from "react-native";
import { StatusBar, View, StyleSheet } from "react-native";

// Import screens
import SplashScreen from "./src/screens/SplashScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/components/auth/Login";
import SignupScreen from "./src/components/auth/SignUp";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import EventScreen from "./src/screens/EventScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EventDetails from "./src/screens/EventsDetailsScreen";
import ConformPopup from "./src/components/ConformPopup";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: 90,
          paddingVertical: 10,
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          borderRadius: 35,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarItemStyle: {
          height: 50,
          borderRadius: 25,
          marginHorizontal: 5,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#9CAFAA",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarBackground: () => <View style={StyleSheet.absoluteFill} />,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
          tabBarItemStyle: ({ focused }) => ({
            backgroundColor: focused ? "#000" : "#f5f5f5",
            height: 50,
            borderRadius: 25,
            marginHorizontal: 5,
          }),
        }}
      />
      <Tab.Screen
        name="CategoryTab"
        component={CategoryScreen}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({ color }) => (
            <Icon name="view-grid" size={24} color={color} />
          ),
          tabBarItemStyle: ({ focused }) => ({
            backgroundColor: focused ? "#000" : "#f5f5f5",
            height: 50,
            borderRadius: 25,
            marginHorizontal: 5,
          }),
        }}
      />
      <Tab.Screen
        name="EventTab"
        component={EventScreen}
        options={{
          tabBarLabel: "Event",
          tabBarIcon: ({ color }) => (
            <Icon name="star" size={24} color={color} />
          ),
          tabBarItemStyle: ({ focused }) => ({
            backgroundColor: focused ? "#000" : "#f5f5f5",
            height: 50,
            borderRadius: 25,
            marginHorizontal: 5,
          }),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="account" size={24} color={color} />
          ),
          tabBarItemStyle: ({ focused }) => ({
            backgroundColor: focused ? "#000" : "#f5f5f5",
            height: 50,
            borderRadius: 25,
            marginHorizontal: 5,
          }),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="MainApp" component={TabNavigator} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="ConformPopup" component={ConformPopup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
