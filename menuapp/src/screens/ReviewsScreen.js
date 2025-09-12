import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const REVIEWS = new Array(4).fill(0).map((_, i) => ({ id: String(i + 1), user: `User ${i + 1}`, text: "Great food and ambiance!" }));

export default function ReviewsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.score}>4.0</Text>
        <Text style={{ color: "#6B7280" }}>120 Reviews</Text>
      </View>
      <FlatList
        data={REVIEWS}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.review}>
            <Text style={{ fontWeight: "700" }}>{item.user}</Text>
            <Text style={{ color: "#374151", marginTop: 4 }}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
      <View style={styles.cta}><Text style={{ color: "#fff", fontWeight: "700" }}>Write a Review</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 16 },
  headerCard: { alignItems: "center", paddingVertical: 24, borderRadius: 16, borderWidth: 1, borderColor: "#E3E5E8", marginBottom: 16 },
  score: { fontSize: 40, fontWeight: "800", color: "#111827" },
  review: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#F3F4F6" },
  cta: { backgroundColor: "#E63946", paddingVertical: 14, borderRadius: 12, alignItems: "center", marginTop: 12 },
});


