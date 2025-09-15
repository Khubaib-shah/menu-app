import React, { useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function LocationScreen({ navigation, route }) {
  const restaurant = route?.params?.restaurant || {
    name: "Ocean View Cafe",
    image: require("../../assets/sample/restaurant1.png"),
    address: "123 Beach Road, Malibu",
    latitude: 34.0259,
    longitude: -118.7798,
  };

  const region = useMemo(() => {
    const lat = restaurant?.latitude ?? 37.78825;
    const lng = restaurant?.longitude ?? -122.4324;
    return {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
  }, [restaurant]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullscreen}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          showsUserLocation
          showsMyLocationButton={false}
        >
          <Marker
            coordinate={{ latitude: region.latitude, longitude: region.longitude }}
            title={restaurant.name}
            description={restaurant.address || ""}
          />
        </MapView>

        <View style={styles.headerOverlay}>
          <Header title="Location" onBackPress={() => navigation.goBack()} />
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.cardRow}>
            <Image source={restaurant.image} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{restaurant.name}</Text>
              <Text style={styles.cardSub}>Get There: ~ 22min</Text>
              <Text style={styles.cardSub}>Timing: 12:00PM - 3:00AM</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.contactButton} onPress={() => navigation.goBack()}>
            <Text style={styles.contactText}>Contact Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  fullscreen: { flex: 1 },
  bottomCard: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  cardRow: { flexDirection: "row", alignItems: "center" },
  cardImage: { width: 56, height: 56, borderRadius: 12, marginRight: 12 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "800", color: "#111" },
  cardSub: { fontSize: 12, color: "#666", marginTop: 2 },
  contactButton: {
    marginTop: 12,
    alignSelf: "flex-start",
    backgroundColor: "#e53935",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  contactText: { color: "#fff", fontSize: 12, fontWeight: "700" },
  headerOverlay: { position: "absolute", top: 0, left: 0, right: 0 },
});


