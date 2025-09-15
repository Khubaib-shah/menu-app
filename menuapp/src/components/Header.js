import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ 
  title, 
  onBackPress, 
  showBackButton = true, 
  rightComponent, 
  showAvatar = false,
  avatarSource 
}) => {
  return (
    <View style={styles.headerRow}>
      <View style={styles.leftSection}>
        {showBackButton && (
          <TouchableOpacity style={styles.backPill} onPress={onBackPress}>
            <Ionicons name="chevron-back" size={18} color="#333" />
          </TouchableOpacity>
        )}
      </View>
      
      <Text style={styles.headerTitle}>{title}</Text>
      
      <View style={styles.rightSection}>
        {rightComponent || (showAvatar && avatarSource && (
          <Image source={avatarSource} style={styles.avatar} />
        )) || <View style={{ width: 28 }} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
  },
  leftSection: {
    width: 28,
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#333",
    flex: 1,
    textAlign: 'center',
  },
  rightSection: {
    width: 28,
    alignItems: 'flex-end',
  },
  backPill: {
    width: 28,
    height: 28,
    borderRadius: 16,
    backgroundColor: "#eef1f4",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#E3E5E8',
  },
});

export default Header;
