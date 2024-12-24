import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
    const handleNext = () => {
      if (email.length > 0) {
        if (password.length > 0) {
          alert("please enter your right email and password");
        }
      }
      if (email === "navas@gmail.com" && password === "123") {
        navigation.navigate("Home");
      } else {
        alert("invalid email or password");
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>signup</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="sample"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

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
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.label}>confirming password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#999"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signupButton} onPress={handleNext}>
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.switchAuth}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.switchAuthText}>
          Already Have An Account? Login Now
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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "black",
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 30,
    width:"100%",
  },
  label: {
    color: "black",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
    fontSize: 16,
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 30,
    width: "100%",
  },
  signupButton: {
    backgroundColor: "#4A148C",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
  },
  signupButtonText: {
    color: "white",
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
  },
  switchAuthText: {
    color: "#4A148C",
    textDecorationLine: "underline",
  },
});
