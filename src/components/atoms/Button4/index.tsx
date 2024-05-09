// Di dalam komponen Button4
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Back, Exit} from '../../../assets';

const Button4 = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  onPress,
  type,
  icon,
  imageStyle, // tambahkan properti ini
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-exit' && <Image source={Exit} style={imageStyle} />}
        {icon === 'icon-back' && <Image source={Back} style={imageStyle} />}
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

export default Button4;

// ... (sisanya sama)
