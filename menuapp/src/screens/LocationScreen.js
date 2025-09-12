import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LocationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <View style={styles.mapPlaceholder} />
      <View style={styles.footer}>
        <View style={styles.locCard}>
          <Text style={{ fontWeight: "700" }}>Kool Cafe</Text>
          <Text style={{ color: "#6B7280", marginTop: 2 }}>New York, USA</Text>
        </View>
        <View style={styles.cta}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>View Location</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 16 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  mapPlaceholder: { flex: 1, backgroundColor: "#E5E7EB", borderRadius: 16 },
  footer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 12 },
  locCard: { backgroundColor: "#FFFFFF", padding: 12, borderRadius: 12, borderWidth: 1, borderColor: "#E3E5E8", flex: 1, marginRight: 12 },
  cta: { backgroundColor: "#E63946", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12 },
});


