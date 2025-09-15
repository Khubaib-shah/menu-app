import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  showPasswordToggle = false,
  onTogglePassword,
  containerStyle,
  inputStyle,
  labelStyle,
  leftIcon,
  rightIcon,
  onRightIconPress,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      
      <View style={styles.inputContainer}>
        {leftIcon && (
          <View style={styles.leftIconContainer}>
            <Ionicons name={leftIcon} size={18} color="#E63946" />
          </View>
        )}
        
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor="#6B7280"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          {...props}
        />
        
        {showPasswordToggle && (
          <TouchableOpacity
            onPress={onTogglePassword}
            style={styles.rightIconContainer}
          >
            <Ionicons
              name={secureTextEntry ? "eye-off" : "eye"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        )}
        
        {rightIcon && !showPasswordToggle && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightIconContainer}
          >
            <Ionicons name={rightIcon} size={18} color="#E53935" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  leftIconContainer: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#111',
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 0,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  rightIconContainer: {
    padding: 8,
  },
});

export default CustomInput;
