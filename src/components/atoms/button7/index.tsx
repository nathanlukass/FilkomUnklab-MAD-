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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 10,
    width: 70,
    height: 30,
    alignSelf: 'center',
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Black',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }),
});
