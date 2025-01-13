import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";
import Background from "../components/Background";
import ButtonTextFit from "../components/ButtonTextFit";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen({ navigation }) {

 const [fontsLoaded] = useFonts({
   Outfit_400Regular,
   Outfit_700Bold,
   Outfit_500Medium,
 });


  const handleSkip = () => {
    navigation.navigate("Login");
  };

  const handleNext = () => {
    // Handle next screen navigation
    navigation.navigate("Login");
  };

  return (
    <>
      <Background>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/10883/10883735.png",
              }}
              style={styles.headerIcon}
            />
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Image
              source={require("../../assets/first.png")}
              style={styles.mainImage}
              resizeMode="contain"
            />

            <View style={styles.textContainer}>
              <Text style={styles.title}>Love served with every bite</Text>
              <Text style={styles.subtitle}>
                Exquisite wedding catering for unforgettable moments, crafted
                with love
              </Text>
            </View>
          </View>

          <ButtonTextFit
            title={
              <AntDesign
                name="right"
                size={24}
                color="black"
                onPress={handleNext}
              />
            }
          />
        </SafeAreaView>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop:20,
    paddingTop: 20,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: "black",
  },
  skipButton: {
    padding: 10,
  },
  skipText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Outfit_400Regular",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  mainImage: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 40,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Outfit_500Medium",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    opacity: 0.9,
    fontFamily: "Outfit_400Regular",
  },
});
