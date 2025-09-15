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
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    navigation.replace("Home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.form}>
            {/* Logo & Title */}
            <View style={styles.header}>
              <Image
                source={require("../../assets/onboarding/logo.png")}
                style={styles.logoImg}
                resizeMode="contain"
              />
              <Text style={styles.logo}>MenuMingle</Text>
              <Text style={styles.title}>Discover Karachi Resturant’s Menu</Text>
            </View>

            <CustomInput
              label="Email"
              placeholder="example@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <CustomInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureText}
              showPasswordToggle={true}
              onTogglePassword={() => setSecureText(!secureText)}
            />

            {/* Remember Me + Forgot Password */}
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View
                  style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
                >
                  {rememberMe && (
                    <Ionicons name="checkmark" size={14} color="#fff" />
                  )}
                </View>
                <Text style={styles.rememberText}>Remember Me</Text>
              </TouchableOpacity>

              <View />
            </View>

            <CustomButton
              title="Login"
              onPress={handleLogin}
              variant="primary"
            />

            <View style={styles.row}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.signupText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  container: { flex: 1 },
  form: { flex: 1, padding: 24, justifyContent: "center" },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoImg: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  logo: {
    fontSize: 32,
    fontWeight: "700",
    color: "#e63946",
    textAlign: "center",
  },
    
  title: { fontSize: 18, textAlign: "center", marginTop: 4, color: "#000000B2", },

  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 4,
  },

  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: { backgroundColor: "#e63946", borderColor: "#e63946" },
  rememberText: { marginLeft: 6, fontSize: 13, color: "#333" },
  forgotText: { color: "#e63946", fontWeight: "600", fontSize: 13 },


  row: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  signupText: { color: "#e63946", fontWeight: "700" },
});
