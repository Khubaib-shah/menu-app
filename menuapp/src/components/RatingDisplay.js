import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RatingDisplay = ({
  rating,
  showNumber = true,
  size = 14,
  color = '#E63946',
  textStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.ratingContainer, containerStyle]}>
      <Ionicons name="star" size={size} color={color} />
      {showNumber && (
        <Text style={[styles.ratingText, { color }, textStyle]}>
          {rating}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
});

export default RatingDisplay;
