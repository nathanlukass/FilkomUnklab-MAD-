import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  Profile1,
  Attendance,
  Seating,
  Statistic,
  Survey,
  Points,
} from '../../../../src/assets/images';

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
        return Seating ? (
          <Image source={Seating} style={{width: 37, height: 60}} />
        ) : null;
      case 'Statistics':
        return Statistic ? (
          <Image source={Statistic} style={styles.icon} />
        ) : null;
      case 'Forum Survey':
        return Survey ? <Image source={Survey} style={styles.icon} /> : null;
      case 'Points Claim':
        return Points ? (
          <Image source={Points} style={{width: 69, height: 59}} />
        ) : null;
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

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';

const index = ({
  label,
  backgroundColor = 'white',
  textColor = 'white',
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
export default index;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: '#796890',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 12,
    borderRadius: 5,
    width: 400,
    height: 50,
    alignSelf: 'center',
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Black',
    fontSize: 22,
    fontWeight: '',
    color: 'white',
  }),
});
