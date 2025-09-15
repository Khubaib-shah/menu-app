import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RestaurantCard = ({ 
  item, 
  onPress, 
  onLocationPress, 
  width, 
  showLocationButton = true 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.card, { width: width || '100%' }]} 
      onPress={onPress}
    > 
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSubtitle}>{item.cuisine || item.categories}</Text>
        <View style={styles.cardFooterRow}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#E63946" />
            <Text style={styles.cardRating}>{item.rating}</Text>
          </View>
          {showLocationButton && (
            <TouchableOpacity
              style={styles.locationBtn}
              onPress={onLocationPress}
            >
              <Text style={styles.locationText}>View Location</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardImage: { 
    width: "100%", 
    height: 170 
  },
  cardBody: { 
    padding: 12 
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: "700" 
  },
  cardSubtitle: { 
    color: "#666", 
    marginTop: 4, 
    fontSize: 13 
  },
  cardFooterRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    marginTop: 8 
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardRating: { 
    fontWeight: "700", 
    color: "#E63946",
    marginLeft: 4,
  },
  locationBtn: {
    backgroundColor: "#E63946",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  locationText: { 
    color: "#fff", 
    fontSize: 12 
  },
});

export default RestaurantCard;
