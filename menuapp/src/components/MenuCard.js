import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MenuCard = ({ 
  item, 
  isFirst = false, 
  onPress,
  variant = 'default' // 'default', 'big', 'starter'
}) => {
  const renderDefaultCard = () => (
    <View style={[styles.cardWrapper, isFirst && styles.bigCardWrapper]}>
      <View style={[styles.card, isFirst && styles.bigCard]}>
        <View style={[styles.plateWrapper, isFirst && styles.bigPlateWrapper]}>
          <Image source={item.image} style={[styles.cardImage, isFirst && styles.bigCardImage]} />
        </View>
        <Text style={[styles.cardTitle, isFirst && styles.bigCardTitle]} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={[styles.cardSubtitle, isFirst && styles.bigCardSubtitle]} numberOfLines={1}>
          {item.details || item.description}
        </Text>
        <Text style={[styles.cardPrice, isFirst && styles.bigCardPrice]}>
          ₹ {item.price}
        </Text>
      </View>
    </View>
  );

  const renderStarterCard = () => (
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

  if (variant === 'starter') {
    return renderStarterCard();
  }

  return renderDefaultCard();
};

const styles = StyleSheet.create({
  // Default Menu Card Styles
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

  // Big Card Styles
  bigCardWrapper: {
    marginTop: 35,
  },
  bigCard: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    paddingTop: 120,
    paddingBottom: 20,
    paddingHorizontal: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    top: -1,
    position: "relative",
  },
  bigPlateWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -45,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  bigCardImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    resizeMode: "cover",
  },
  bigCardTitle: {
    fontSize: 15,
  },
  bigCardSubtitle: {
    fontSize: 14,
  },
  bigCardPrice: {
    fontSize: 18,
  },

  // Starter Card Styles
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

export default MenuCard;
