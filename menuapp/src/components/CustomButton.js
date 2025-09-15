import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({
  title,
  onPress,
  variant = 'primary', // 'primary', 'secondary', 'outline'
  size = 'medium', // 'small', 'medium', 'large'
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[`${variant}Button`], styles[`${size}Button`]];
    if (disabled) baseStyle.push(styles.disabledButton);
    if (style) baseStyle.push(style);
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.text, styles[`${variant}Text`], styles[`${size}Text`]];
    if (disabled) baseStyle.push(styles.disabledText);
    if (textStyle) baseStyle.push(textStyle);
    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? '#fff' : '#e63946'} 
          size="small" 
        />
      ) : (
        <>
          {icon && <Text style={styles.icon}>{icon}</Text>}
          <Text style={getTextStyle()}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  // Variants
  primaryButton: {
    backgroundColor: '#e63946',
  },
  secondaryButton: {
    backgroundColor: '#f3f4f6',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e63946',
  },
  
  // Sizes
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  
  // States
  disabledButton: {
    backgroundColor: '#e5e7eb',
    borderColor: '#e5e7eb',
  },
  
  // Text styles
  text: {
    fontWeight: '700',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#374151',
  },
  outlineText: {
    color: '#e63946',
  },
  
  // Text sizes
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
  
  disabledText: {
    color: '#9ca3af',
  },
  
  icon: {
    marginRight: 8,
  },
});

export default CustomButton;
