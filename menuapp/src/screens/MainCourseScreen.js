import React, { useMemo } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MainCourseScreen({ navigation }) {
  const MENU_CATEGORIES = useMemo(() => (
    [
      { 
        id: "main", 
        title: "Main Course", 
        items: [
          { id: "m1", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant1.png") },
          { id: "m2", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant2.png") },
          { id: "m3", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant3.png") },
        ]
      },
      { 
        id: "starters", 
        title: "Starters", 
        items: [
          { id: "s1", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant1.png") },
          { id: "s2", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant2.png") },
          { id: "s3", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant3.png") },
        ]
      },
      { 
        id: "drinks", 
        title: "Drinks and Beverages", 
        items: [
          { id: "d1", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant1.png") },
          { id: "d2", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant2.png") },
          { id: "d3", name: "Food 2", details: "Some Details", price: 285, image: require("../../assets/sample/restaurant3.png") },
        ]
      },
    ]
  ), []);

  const renderMenuCard = ({ item }) => (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <View style={styles.plateWrapper}>
          <Image source={item.image} style={styles.cardImage} />
        </View>
        <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.cardSubtitle} numberOfLines={1}>{item.details}</Text>
        <Text style={styles.cardPrice}>₹ {item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 12 }}>
        {MENU_CATEGORIES.map((category, index) => (
          <View key={category.id} style={[styles.categorySection, index === 0 && { paddingTop: 6 }]}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <FlatList
              data={category.items}
              keyExtractor={(i) => i.id}
              renderItem={renderMenuCard}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 12 }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 45,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
    backgroundColor: "#fff",
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f4f5f7",
    alignItems: "center",
    justifyContent: "center",
  },
  categorySection: {
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
    textAlign: "center",
  },
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
});
