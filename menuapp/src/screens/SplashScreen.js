import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";


export default function SplashScreen({ navigation }) {
useEffect(() => {
const t = setTimeout(() => navigation.replace("Onboarding"), 1500);
return () => clearTimeout(t);
}, []);


return (
<View style={styles.container}>
<Text style={styles.logo}>MenuMingle</Text>
<Text style={styles.tag}>Discover & Explore Menus</Text>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
logo: { fontSize: 28, fontWeight: "700", color: "#e63946" },
tag: { marginTop: 8, color: "#666" },
});