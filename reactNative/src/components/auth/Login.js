import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


    const handleNext = () => {
        if(email.length > 0) {
            if(password.length > 0) {
                alert("please enter your right email and password");
            }
        }
        if(email === "navas@gmail.com" && password === "123"){
            navigation.navigate("Home");
        }else{
            alert("invalid email or password");
        }
    };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showPasswordButton}
          >
            <Icon
              name={showPassword ? "visibility" : "visibility-off"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleNext}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.switchAuth}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.switchAuthText}>
          Don't Have An Account? Signup Now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7f6",
    padding: 20,
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
  title: {
    fontSize: 24,
    color: "#000", // Changed to black for better readability on light background
    marginBottom: 40,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 30,
    width: "100%", // Ensures inputs span the available width
  },
  label: {
    color: "#000", // Changed to black for better readability
    marginBottom: 8,
    marginTop: 10,
    fontWeight: "500",
  },
  input: {
    // flex: 1,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    // marginBottom: 16,
    flexDirection: "row",
    width: "100%",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  showPasswordButton: {
    padding: 5,
   paddingRight:20,
  },
  forgotPassword: {
    color: "#007BFF", // Changed for better contrast
    textAlign: "right",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    width: "100%", // Ensures buttons span the available width
    gap: 16,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: "#4A148C",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  googleButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  googleButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  switchAuth: {
    alignItems: "center",
    marginTop: 20, // Space between buttons and switchAuth
  },
  switchAuthText: {
    color: "#4A148C",
    textDecorationLine: "underline",
  },
});

     