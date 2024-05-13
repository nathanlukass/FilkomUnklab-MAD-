import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackButton1} from '../../../assets/icon';
const Button8 = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <BackButton1 />}
        {/* {icon === 'logo' && <Logo />} */}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button8;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginLeft: 245,
    paddingVertical: 4,
    borderRadius: 25,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: textColor,
  }),
});
