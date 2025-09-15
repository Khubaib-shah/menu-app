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
import Header from "../components/Header";
import MenuCard from "../components/MenuCard";
import SectionHeader from "../components/SectionHeader";
import RatingDisplay from "../components/RatingDisplay";

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

  const renderMenuCard = ({ item, index }) => {
    const isFirst = index === 0;
    return (
      <MenuCard 
        item={item} 
        isFirst={isFirst}
        onPress={() => {}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔹 Header */}
      <Header 
        title="Restaurant Details"
        onBackPress={() => navigation.goBack()}
      />

      {/* 🔹 Hero */}
      <View style={styles.heroContainer}>
        <Image source={item.image} style={styles.heroImage} resizeMode="cover" />
        <View style={styles.heroOverlay}>
          <View style={styles.heroContent}>
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <RatingDisplay rating={item.rating} size={16} />
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
        <SectionHeader 
          title="See Full Menu"
          onSeeAllPress={() => navigation.navigate("MainCourse")}
        />

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

});


