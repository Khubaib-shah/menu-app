import React, { useMemo } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView,
  Platform,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import MenuCard from "../components/MenuCard";

export default function MainCourseScreen({ navigation }) {
  const topInset = Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0;
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
    <MenuCard 
      item={item} 
      onPress={() => {}}
    />
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: topInset }]}>
      <Header 
        title="Main Course"
        onBackPress={() => navigation.goBack()}
      />

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
});
