import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ProfileBack, Exit, Notif, Back} from '../../../assets';

const Button4 = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  onPress,
  type,
  icon,
  imageStyle,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-exit' && <Image source={Exit} style={imageStyle} />}
        {icon === 'icon-back' && <Image source={Back} style={imageStyle} />}
        {icon === 'icon-notif' && <Image source={Notif} style={imageStyle} />}
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
