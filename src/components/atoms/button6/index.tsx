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
    backgroundColor: '#F5CC0D',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: 350,
    height: 35,
    alignSelf: 'center',
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Black',
    fontSize: 23,
    fontWeight: '',
    color: 'white',
  }),
});
