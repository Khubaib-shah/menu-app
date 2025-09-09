import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleSignup = () => {
    // signup logic here
    navigation.replace("Main");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.form}>
              {/* Logo + Title */}
              <View style={styles.header}>
                <Image
                  source={require("../../assets/onboarding/logo.png")}
                  style={styles.logoImg}
                  resizeMode="contain"
                />
                <Text style={styles.logo}>MingleMenu</Text>
                <Text style={styles.subtitle}>
                  Discover Karachi Restaurant's Menu
                </Text>
              </View>

              {/* Inputs */}
              <TextInput
                placeholder="Enter Your Username"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                placeholder="Enter Your Email"
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                placeholder="Enter Your Phone Number"
                style={styles.input}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Enter Your Password"
                  style={styles.passwordInput}
                  secureTextEntry={secureText}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setSecureText(!secureText)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={secureText ? "eye-off" : "eye"}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={handleSignup}
              >
                <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>

              {/* Already have an account */}
              <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  form: {
    flex: 1,
    justifyContent: "center",
  },

  // Header
  header: { alignItems: "center", marginBottom: 32 },
  logoImg: { width: 48, height: 48, marginBottom: 8 },
  logo: {
    fontSize: 32,
    fontWeight: "700",
    color: "#e63946",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#444",
    marginTop: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 12,
    paddingRight: 10,
    backgroundColor: "#fafafa",
  },
  passwordInput: { flex: 1, padding: 12 },
  eyeIcon: { padding: 8 },

  // Button
  primaryButton: {
    backgroundColor: "#e63946",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  btnText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  // Footer
  row: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  loginText: { color: "#e63946", fontWeight: "700" },
});
