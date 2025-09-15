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
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleSignup = () => {
    // signup logic here
    navigation.replace("Home");
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
              <CustomInput
                placeholder="Enter Your Username"
                value={username}
                onChangeText={setUsername}
              />
              <CustomInput
                placeholder="Enter Your Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <CustomInput
                placeholder="Enter Your Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
              <CustomInput
                placeholder="Enter Your Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureText}
                showPasswordToggle={true}
                onTogglePassword={() => setSecureText(!secureText)}
              />

              {/* Sign Up Button */}
              <CustomButton
                title="Sign Up"
                onPress={handleSignup}
                variant="primary"
              />

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


  // Footer
  row: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  loginText: { color: "#e63946", fontWeight: "700" },
});
