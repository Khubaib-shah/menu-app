import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import OnboardingItem from "../components/OnboardingItem";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    title: "Discover Karachi's Restaurants",
    subtitle: "Explore menus, images, and more from top local eateries",
    image: require("../../assets/onboarding/ob1.png"),
  },
  {
    id: "2",
    title: "See Full Menus Before Visiting",
    subtitle: "Place orders seamlessly from anywhere",
    image: require("../../assets/onboarding/ob2.png"),
  },
  {
    id: "3",
    title: "Navigate Easily",
    subtitle: "Find restaurants quickly with integrated maps",
    image: require("../../assets/onboarding/ob3.png"),
  },
  {
    id: "4", 
    isFinal: true,
    logo: require("../../assets/onboarding/logo.png"),
    title: "MingleMenu",
    subtitle: "Discover Karachi Restaurant's Menu",
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const { width } = useWindowDimensions();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleNext = () => {
    if (currentIndex < DATA.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handleSkip = () => {
    navigation.replace("Login");
  };

  const handleGetStarted = () => {
    navigation.replace("Login");
  };

  const renderItem = ({ item }) => {
    if (item.isFinal) {
      return (
        <View style={[styles.finalContainer, { width }]}>
          <View style={styles.finalContent}>
            <Image source={item.logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.finalTitle}>{item.title}</Text>
            <Text style={styles.finalSubtitle}>{item.subtitle}</Text>
          </View>

          <TouchableOpacity
            style={styles.getStartedBtn}
            onPress={handleGetStarted}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return <OnboardingItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />

      {currentIndex < DATA.length - 1 && (
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <View style={styles.dotsContainer}>
            {DATA.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, currentIndex === i && styles.dotActive]}
              />
            ))}
          </View>

          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 45,
  },
  skipText: { fontSize: 16, color: "#999" },
  nextText: { fontSize: 16, color: "#e63946", fontWeight: "600" },
  dotsContainer: { flexDirection: "row", alignItems: "center" },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  dotActive: { backgroundColor: "#e63946", width: 12, height: 12 },

  finalContainer: {
    flex: 1,
    justifyContent: "space-between", 
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  finalContent: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
  },
  logo: { width: 48, height: 48, marginBottom: 20 },
  finalTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#e63946",
    marginBottom: 8,
  },
  finalSubtitle: {
    fontSize: 18,
    lineHeight:"25",
    color: "#444",
    textAlign: "center",
    marginBottom: 30,
  },
  getStartedBtn: {
    backgroundColor: "#e63946",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  getStartedText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
