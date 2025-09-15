import React, { useMemo } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  FlatList 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantDetailScreen({ navigation, route }) {
  const item = route?.params?.item || {
    name: "Ocean View Cafe",
    rating: 4.5,
    image: require("../../assets/sample/restaurant1.png"),
    categories: "Cafe · Continental · Desserts",
  };

  const MENU = useMemo(() => (
    [
      { id: "m1", name: "Food 1", details: "Some Details", price: 310, image: require("../../assets/sample/restaurant1.png") },
      { id: "m2", name: "Food 2", details: "Same Details", price: 285, image: require("../../assets/sample/restaurant2.png") },
      { id: "m3", name: "Food 3", details: "Same Details", price: 285, image: require("../../assets/sample/restaurant3.png") },
      { id: "m4", name: "Food 4", details: "Some Details", price: 260, image: require("../../assets/sample/restaurant1.png") },
    ]
  ), []);

  // ✅ Same Card Layout from MainCourseScreen
  const renderMenuCard = ({ item, index }) => {
    const isFirst = index === 0;
    return (
      <View style={[styles.cardWrapper, isFirst && styles.bigCardWrapper]}>
        <View style={[styles.card, isFirst && styles.bigCard]}>
          <View style={[styles.plateWrapper, isFirst && styles.bigPlateWrapper]}>
            <Image source={item.image} style={[styles.cardImage, isFirst && styles.bigCardImage]} />
          </View>
          <Text style={[styles.cardTitle, isFirst && styles.bigCardTitle]} numberOfLines={1}>{item.name}</Text>
          <Text style={[styles.cardSubtitle, isFirst && styles.bigCardSubtitle]} numberOfLines={1}>{item.details}</Text>
          <Text style={[styles.cardPrice, isFirst && styles.bigCardPrice]}>₹ {item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔹 Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backPill} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={18} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Restaurant Details</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* 🔹 Hero */}
      <View style={styles.heroContainer}>
        <Image source={item.image} style={styles.heroImage} resizeMode="cover" />
        <View style={styles.heroOverlay}>
          <View style={styles.heroContent}>
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#e53935" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={() => navigation.navigate("Location", { restaurant: item })}
            >
              <Text style={styles.locationButtonText}>View Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 🔹 Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </Text>
      </View>

      {/* 🔹 Menu */}
      <View style={styles.menuContainer}>
        <View style={styles.menuHeader}>
          <Text style={styles.menuSectionTitle}>See Full Menu</Text>
          <TouchableOpacity onPress={() => navigation.navigate("MainCourse")}>
            <Text style={styles.seeAllText}>See all {'>'}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={MENU}
          keyExtractor={(i) => i.id}
          renderItem={renderMenuCard}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
  },
  backPill: {
    width: 28,
    height: 28,
    borderRadius: 16,
    backgroundColor: "#eef1f4",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: { fontWeight: "600", fontSize: 16, color: "#333" },

  heroContainer: {
    marginTop: 10,
    overflow: "hidden",
    position: "relative",
    height: 223,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heroImage: { width: "100%", height: 223, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heroContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  restaurantInfo: { flex: 1 },
  restaurantName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#000",
    marginBottom: 8,
  },
  ratingContainer: { flexDirection: "row", alignItems: "center" },
  ratingText: { fontSize: 14, fontWeight: "600", color: "#111", marginLeft: 6 },
  locationButton: {
    backgroundColor: "#e53935",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  locationButtonText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  descriptionContainer: { paddingHorizontal: 16, paddingVertical: 20, marginTop: 10 },
  descriptionTitle: { fontSize: 16, fontWeight: "700", color: "#333", marginBottom: 8 },
  descriptionText: { fontSize: 14, color: "#666", lineHeight: 20, opacity: 0.7 },

  menuContainer: { paddingVertical: 20, marginTop: -10 },
  menuHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingHorizontal: 16 },
  menuSectionTitle: { fontSize: 16, fontWeight: "700", color: "#333" },
  seeAllText: { fontSize: 14, color: "#e53935", fontWeight: "600" },

  // ✅ Same Card Style as MainCourseScreen
  cardWrapper: {
    marginRight: 20,
    alignItems: "center",
    marginTop: 35,
  },
  card: {
    width: 110,
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    paddingTop: 95,
    paddingBottom: 15,
    paddingHorizontal: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    top: -1,
    position: "relative",
  },
  plateWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -35,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 2,
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 3,
    textAlign: "center",
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#e53935",
    textAlign: "center",
  },

  // Add these styles:
  bigCardWrapper: {
    marginTop: 35, // same as cardWrapper for alignment
  },
  bigCard: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    paddingTop: 120, // thoda zyada taki image overlap na ho
    paddingBottom: 20,
    paddingHorizontal: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    top: -1,
    position: "relative",
  },
  bigPlateWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -45, // yeh value image ko card ke upar sahi jagah la degi
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  bigCardImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    resizeMode: "cover",
  },
  bigCardTitle: {
    fontSize: 15,
  },
  bigCardSubtitle: {
    fontSize: 14,
  },
  bigCardPrice: {
    fontSize: 18,
  },
});


