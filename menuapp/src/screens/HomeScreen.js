import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TOP_PICKS = [
  { id: "1", name: "Chicken Biryani", image: require("../../assets/sample/restaurant1.png") },
  { id: "2", name: "Sushi House", image: require("../../assets/sample/restaurant2.png") },
  { id: "3", name: "Subway", image: require("../../assets/sample/restaurant1.png") },
  { id: "4", name: "KFC", image: require("../../assets/sample/restaurant1.png") },
  { id: "5", name: "KFC", image: require("../../assets/sample/restaurant1.png") },
  { id: "6", name: "KFC", image: require("../../assets/sample/restaurant1.png") },
];

const RESTAURANTS = [
  { id: "1", name: "Rose Garden Restaurant", cuisine: "Burger · Chicken · Riche · Wings", rating: 4.7, image: require("../../assets/sample/restaurant1.png") },
  { id: "2", name: "Ocean View Cafe", cuisine: "Seafood · Grill · Pasta", rating: 4.5, image: require("../../assets/sample/restaurant2.png") },
  { id: "3", name: "Ocean View Cafe", cuisine: "Seafood · Grill · Pasta", rating: 4.5, image: require("../../assets/sample/restaurant2.png") },
  { id: "4", name: "Ocean View Cafe", cuisine: "Seafood · Grill · Pasta", rating: 4.5, image: require("../../assets/sample/restaurant2.png") },
];

export default function HomeScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const topInset = Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0;

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity style={[styles.card, { width: width * 0.75 }]} onPress={() => navigation.navigate("RestaurantDetail", { item })}> 
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubtitle}>{item.cuisine}</Text>
        <View style={styles.cardFooterRow}>
          <Text style={styles.cardRating}>★ {item.rating}</Text>
          <TouchableOpacity
            style={styles.locationBtn}
            onPress={() => navigation.navigate("Location", { restaurant: item })}
          >
            <Text style={styles.locationText}>View Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: topInset }]}>
      <ScrollView>
      {/* Header Card with search */}
      <View style={styles.headerCard}>
        <View style={styles.headerTopRow}>
          <View>
            <Text style={styles.greeting}>Hi Daniel</Text>
            <Text style={styles.subGreeting}>Discover Menus Near You</Text>
          </View>
          <Image
            source={require("../../assets/sample/restaurant1.png")}
            style={styles.profilePic}
          />
        </View>
        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={18} color="#E63946" style={styles.searchIconIcon} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#6B7280"
              style={styles.searchInput}
              onFocus={() => navigation.navigate("Search")}
            />
          </View>
          <View style={styles.rightColumn}>
            <TouchableOpacity style={styles.actionBtn}>
              <Ionicons name="options-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Top Picks */}
      <Text style={styles.sectionTitle}>Top Picks</Text>
      <FlatList
        data={TOP_PICKS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.topPickItem}>
            <View style={styles.topPickCard}>
              <Image source={item.image} style={styles.topPickImage} />
            </View>
            <Text style={styles.topPickLabel} numberOfLines={1}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 12 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      />

      {/* Nearby Restaurants */}
      <Text style={styles.sectionTitle}>Near by me</Text>
      <FlatList
        data={RESTAURANTS}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderRestaurant}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 12 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      />

      {/* Recommended Section */}
      <Text style={[styles.sectionTitle, { marginTop: 1 }]}>Top Recommended</Text>
      <FlatList
        data={RESTAURANTS}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderRestaurant}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 24 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerCard: {
    backgroundColor: "transparent",
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 6,
    borderRadius: 0,
    padding: 0,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 18,
    paddingHorizontal: 16,
    height: 49,
  },
  greeting: { fontSize: 18, fontWeight: "700" },
  subGreeting: { color: "#666", fontSize: 14 },
  profilePic: { width: 36, height: 36, borderRadius: 18, marginBottom: 8 },
  searchRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, marginTop: 6 },
  searchContainer: {
    flex: 1,
    // width: undefined,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#E3E5E8",
    height: 40,
    marginRight: 12,
  },
  rightColumn: { alignItems: "flex-end", justifyContent: "center" },
  searchIconIcon: { marginRight: 8 },
  searchInput: { flex: 1, color: "#111", fontSize: 16, paddingTop: 0, paddingBottom: 0, includeFontPadding: false, textAlignVertical: 'center' },
  actionBtn: {
    width: 40,
    height: 40,
    marginLeft: 0,
    borderRadius: 12,
    backgroundColor: "#E63946",
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtnText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginHorizontal: 16, marginTop: 12, marginBottom: 8 },
  topPickItem: { alignItems: "center", width: 72 },
  topPickCard: {
    backgroundColor: "#fff",
    borderRadius: 50,
    marginRight: 0,
    elevation: 2,
  },
  topPickImage: { width: 62, height: 62, borderRadius: 50 },
  topPickLabel: { marginTop: 6, fontSize: 11, color: "#7A7A7A", textAlign: "center" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardImage: { width: "100%", height: 170 },
  cardBody: { padding: 12 },
  cardTitle: { fontSize: 16, fontWeight: "700" },
  cardSubtitle: { color: "#666", marginTop: 4, fontSize: 13 },
  cardFooterRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 },
  cardRating: { fontWeight: "700", color: "#E63946" },
  locationBtn: {
    backgroundColor: "#E63946",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  locationText: { color: "#fff", fontSize: 12 },
});
