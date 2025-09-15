import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SectionHeader = ({
  title,
  onSeeAllPress,
  seeAllText = "See all >",
  showSeeAll = true,
  containerStyle,
  titleStyle,
  seeAllStyle,
}) => {
  return (
    <View style={[styles.sectionHeader, containerStyle]}>
      <Text style={[styles.sectionTitle, titleStyle]}>{title}</Text>
      {showSeeAll && onSeeAllPress && (
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text style={[styles.seeAllText, seeAllStyle]}>{seeAllText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#e53935',
    fontWeight: '600',
  },
});

export default SectionHeader;
