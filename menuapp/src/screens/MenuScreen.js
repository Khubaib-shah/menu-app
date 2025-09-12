import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ITEMS = new Array(8).fill(0).map((_, i) => ({ id: String(i + 1), title: `Dish ${i + 1}` }));

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Course</Text>
      <FlatList
        data={ITEMS}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={require("../../assets/sample/restaurant1.png")}
              style={{ width: "100%", height: 90, borderRadius: 12 }} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 16 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  card: { width: "48%", backgroundColor: "#FFFFFF", borderRadius: 12, marginBottom: 14 },
  cardTitle: { marginTop: 8, fontWeight: "600" },
});


