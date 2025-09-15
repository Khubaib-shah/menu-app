import React, { useMemo } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    <View style={styles.starterCardContainer}>
      <View style={styles.starterCard}>
        <Image source={item.image} style={styles.starterImage} />
        <View style={styles.starterCardContent}>
          <Text style={styles.starterName}>{item.name}</Text>
          <Text style={styles.starterDescription}>{item.description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.currencyText}>₨</Text>
            <Text style={styles.starterPrice}>{item.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backPill} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={18} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Starters</Text>
          <View style={{ width: 28 }} />
        </View>

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
  
  // Header Styles
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10
  },
  backPill: {
    width: 28,
    height: 28,
    borderRadius: 16,
    backgroundColor: "#eef1f4",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: '#333'
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

  // Starter Card Container - Exact Figma design: Circular image overlapping white card
  starterCardContainer: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 40
  },
  starterCard: {
    width: 110,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative'
  },
  starterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
    position: 'absolute',
    top: -40,
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 1
  },
  starterCardContent: {
    alignItems: 'center',
    width: '100%',
    zIndex: 0
  },
  starterName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#222',
    marginBottom: 2,
    textAlign: 'center'
  },
  starterDescription: {
    fontSize: 11,
    color: '#999',
    marginBottom: 6,
    textAlign: 'center'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  currencyText: {
    fontSize: 11,
    color: '#999',
    marginRight: 2
  },
  starterPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e53935'
  }
});
