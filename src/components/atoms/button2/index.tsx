import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  Profile1,
  Attendance,
  Seatting,
  Statistic,
  Survey,
  Points,
} from '../../../../src/assets';

const Button2 = ({
  label,
  backgroundColor = 'black',
  textColor = 'black',
  onPress,
  type,
  icon,
}) => {
  const getIcon = label => {
    switch (label) {
      case 'Profile':
        return Profile1 ? (
          <Image source={Profile1} style={styles.icon} />
        ) : null;
      case 'Take Attendance':
        return Attendance ? (
          <Image source={Attendance} style={styles.icon} />
        ) : null;
      case 'Seatting Map':
        return Seatting ? (
          <Image source={Seatting} style={{width: 35, height: 59}} />
        ) : null;
      case 'Statistics':
        return Statistic ? (
          <Image source={Statistic} style={styles.icon} />
        ) : null;
      case 'Forum Survey':
        return Survey ? <Image source={Survey} style={styles.icon} /> : null;
      case 'Points Claim':
        return Points ? <Image source={Points} style={styles.icon} /> : null;
      default:
        return null;
    }
  };

  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {getIcon(label)}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      activeOpacity={0.7}
      onPress={onPress}>
      {getIcon(label)}
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button2;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: '#796890',
    borderRadius: 17,
    width: 159,
    height: 133,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 19,
    color: textColor,
  }),
  icon: {
    width: 59,
    height: 59,
  },
});
