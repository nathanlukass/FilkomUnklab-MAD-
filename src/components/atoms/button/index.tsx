import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import {BackButton} from '../../../assets/icon';

const Button = ({
  label,
  backgroundColor = 'white',
  textColor = 'black', // Ubah warna teks menjadi hitam
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <BackButton />}
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
export default Button;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor, // Gunakan backgroundColor dari props
    borderWidth: 1,
    borderColor: '#020202',
    paddingVertical: 12,
    borderRadius: 25,
    width: 203,
    height: 45,
    alignSelf: 'center',
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: textColor, // Gunakan textColor dari props
  }),
});
