import React, { useMemo } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import MenuCard from "../components/MenuCard";

export default function StartersScreen({ navigation }) {
  const STARTERS = useMemo(() => (
    [
      { 
        id: "s1", 
        name: "Bruschetta", 
        description: "Toasted bread with tomatoes", 
        price: 180, 
        image: require("../../assets/sample/restaurant1.png")
      },
      { 
        id: "s2", 
        name: "Caesar Salad", 
        description: "Fresh lettuce with dressing", 
        price: 220, 
        image: require("../../assets/sample/restaurant2.png")
      },
      { 
        id: "s3", 
        name: "Chicken Wings", 
        description: "Spicy buffalo wings", 
        price: 250, 
        image: require("../../assets/sample/restaurant3.png")
      },
      { 
        id: "s4", 
        name: "Spring Rolls", 
        description: "Crispy vegetable rolls", 
        price: 160, 
        image: require("../../assets/sample/restaurant1.png")
      },
      { 
        id: "s5", 
        name: "Garlic Bread", 
        description: "Toasted bread with garlic", 
        price: 120, 
        image: require("../../assets/sample/restaurant2.png")
      },
      { 
        id: "s6", 
        name: "Mozzarella Sticks", 
        description: "Fried cheese sticks", 
        price: 200, 
        image: require("../../assets/sample/restaurant3.png")
      }
    ]
  ), []);

  const renderStarterCard = ({ item }) => (
    <MenuCard 
      item={item} 
      variant="starter"
      onPress={() => {}}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header 
          title="Starters"
          onBackPress={() => navigation.goBack()}
        />

        {/* Starters Grid */}
        <View style={styles.startersContainer}>
          <FlatList
            data={STARTERS}
            keyExtractor={(item) => item.id}
            renderItem={renderStarterCard}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.startersList}
            scrollEnabled={false}
            columnWrapperStyle={styles.row}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  

  // Starters Container
  startersContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20
  },
  startersList: {
    paddingBottom: 20
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20
  },

});
