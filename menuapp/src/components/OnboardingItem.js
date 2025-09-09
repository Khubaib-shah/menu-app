import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";

export default function OnboardingItem({ item }) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      
      <Image
        source={item.image}
        style={[styles.image, { width: width * 0.8, height: height * 0.45 }]}
        resizeMode="contain"
      />

      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  textContainer: {
    alignItems: "center", // center align text
  },
  title: {
    marginTop: -50,
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#000000B2",
    paddingHorizontal: 10,
  },
});
