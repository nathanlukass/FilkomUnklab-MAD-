import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {
  Profile1,
  Attendance,
  Seating,
  Statistic,
  Survey,
  Points,
} from '../../../../src/assets/images';

const Button5 = ({
  label,
  backgroundColor = 'black',
  textColor = 'white',
  onPress,
  type,
  icon,
}) => {
  // ...
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={styles.row}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.label(textColor)}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button5;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: '#796890',
    borderRadius: 17,
    width: 331,
    height: 176,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    padding: 10,
  }),
  label: textColor => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 21,
    color: textColor,
    marginLeft: 10,
    marginTop: 0,
    fontWeight: 'bold',
  }),
  icon: {
    width: 129,
    height: 129,
    marginStart: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
