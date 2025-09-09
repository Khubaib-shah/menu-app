import React, { useMemo } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, useWindowDimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantDetailScreen({ navigation, route }) {
const { width } = useWindowDimensions();
const item = route?.params?.item || {
  name: "Koel Cafe",
  rating: 4.7,
  image: require("../../assets/sample/restaurant1.png"),
  categories: "Cafe · Continental · Desserts",
};

const MENU = useMemo(() => (
  [
    { id: "m1", name: "Food 1", details: "Some Details", price: 310, image: require("../../assets/sample/restaurant1.png") },
    { id: "m2", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant2.png") },
    { id: "m3", name: "Food 3", details: "Some Details", price: 199, image: require("../../assets/sample/restaurant3.png") },
    { id: "m4", name: "Food 4", details: "Some Details", price: 260, image: require("../../assets/sample/restaurant1.png") },
  ]
), []);

const renderMenuCard = ({ item: menu }) => (
  <View style={styles.menuCard}>
    <Image source={menu.image} style={styles.menuImage} />
    <View style={{ paddingHorizontal: 10, paddingBottom: 12 }}>
      <Text style={styles.menuTitle}>{menu.name}</Text>
      <Text style={styles.menuSub}>Some Details</Text>
      <Text style={styles.menuPrice}>Rs {menu.price}</Text>
    </View>
  </View>
);

return (
<SafeAreaView style={styles.container}>
<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
  <View style={styles.headerRow}>
    <TouchableOpacity style={styles.backPill} onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={18} color="#333" />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Resturant Details</Text>
    <View style={{ width: 28 }} />
  </View>

  <View style={[styles.heroWrap, { width: Math.min(width * 0.92, 520) }]}> 
    <Image source={item.image} style={styles.heroImage} resizeMode="cover" />
    <View style={styles.bottomOverlay}>
      <View style={styles.topRow}>
        <Text style={styles.placeName} numberOfLines={1}>{item.name}</Text>
        <View style={styles.locationBtn}><Text style={styles.locationText}>View Location</Text></View>
      </View>
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={16} color="#e53935" style={{ marginRight: 6 }} />
        <Text style={styles.ratingBlack}>{item.rating}</Text>
      </View>
    </View>
  </View>

  <View style={[styles.sheet, { width: Math.min(width * 0.92, 520) }]}> 
    <Text style={styles.sectionTitle}>Description</Text>
    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
    </Text>

    <View style={styles.menuHeader}>
      <Text style={styles.sectionTitle}>See Full Menu</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="flame" size={16} color="#ff6b6b" style={{ marginRight: 4 }} />
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>

    <FlatList
      data={MENU}
      keyExtractor={(i) => i.id}
      renderItem={renderMenuCard}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 8 }}
    />
  </View>
</ScrollView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: "#fff" },
headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingTop: 6, paddingBottom: 10 },
backPill: { width: 28, height: 28, borderRadius: 16, backgroundColor: "#eef1f4", alignItems: "center", justifyContent: "center" },
headerTitle: { fontWeight: "600" },
heroWrap: { alignSelf: 'center', borderRadius: 16, overflow: 'hidden' },
heroImage: { width: "100%", height: 180 },
bottomOverlay: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: 12, paddingTop: 10, paddingBottom: 10, backgroundColor: 'rgba(255,255,255,0.88)' },
topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
placeName: { color: '#ffffff', fontSize: 22, fontWeight: '800', marginBottom: 8, textShadowColor: 'rgba(0,0,0,0.25)', textShadowRadius: 6 },
ratingRow: { flexDirection: 'row', alignItems: 'center' },
ratingBlack: { color: '#111', fontWeight: '600' },
locationBtn: { backgroundColor: '#ff6b6b', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 14 },
locationText: { color: '#fff', fontSize: 12, fontWeight: '600' },
sheet: { alignSelf: 'center', marginTop: 12, backgroundColor: '#fff', borderRadius: 16, padding: 14 },
sectionTitle: { fontWeight: '700', marginBottom: 8 },
description: { color: '#666', lineHeight: 18, marginBottom: 12 },
menuHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 },
seeAll: { color: '#999', fontWeight: '600' },
menuCard: { width: 140, backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden', borderWidth: 1, borderColor: '#eee', marginRight: 12 },
menuImage: { width: '100%', height: 86 },
menuTitle: { fontSize: 12, fontWeight: '700', color: '#222', marginTop: 6 },
menuSub: { color: '#999', fontSize: 11, marginTop: 2 },
menuPrice: { color: '#e53935', fontWeight: '700', marginTop: 6 },
});


