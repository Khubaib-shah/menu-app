import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = ({
  placeholder = "Search",
  value,
  onChangeText,
  onFocus,
  onClear,
  containerStyle,
  inputStyle,
  showClearButton = true,
  ...props
}) => {
  return (
    <View style={[styles.searchContainer, containerStyle]}>
      <Ionicons name="search-outline" size={18} color="#E63946" style={styles.searchIcon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#6B7280"
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        style={[styles.searchInput, inputStyle]}
        returnKeyType="search"
        selectionColor="#E63946"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
      {showClearButton && value && value.length > 0 && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <Ionicons name="close-circle" size={18} color="#E53935" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#E3E5E8",
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#111',
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 0,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  clearButton: {
    padding: 4,
  },
});

export default SearchInput;
