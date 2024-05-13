import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '../Gap';

const Button3 = ({
  label,
  additionalText,
  label2,
  status = 'Present', // tambahkan status sebagai prop dengan default 'Present'
  backgroundColor = 'black',
  textColor = 'black',
}) => {
  // fungsi untuk mendapatkan warna berdasarkan status
  const getStatusColor = status => {
    switch (status) {
      case 'Late':
        return '#FFFFFF';
      case 'Absent':
        return '#DA1A1A';
      case 'Present':
        return '#67CA39';
      default:
        return 'black';
    }
  };

  return (
    <View style={styles.container(backgroundColor)}>
      <Text style={styles.label(textColor)}>{label}</Text>
      <Text style={styles.additionalText(textColor)}>{additionalText}</Text>
      <Text style={styles.label2(getStatusColor(status))}>{label2}</Text>
    </View>
  );
};

export default Button3;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: '#F5CC0D',
    borderRadius: 17,
    width: 331,
    height: 120,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 19,
    color: textColor,
    fontWeight: 'bold',
  }),
  additionalText: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: textColor,
  }),
  label2: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: textColor, // warna teks sekarang dinamis berdasarkan status
    marginTop: 11,
    fontWeight: 'bold',
  }),
});
