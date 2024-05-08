import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Exit, BackButton, Notif, Profile} from '../../../../src/assets/icon';

const index = ({
  label,
  backgroundColor = 'black',
  textColor = 'black',
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-exit' && <Exit />}
        {icon === 'icon-notif' && <Notif />}
        {icon === 'icon-back' && <BackButton />}
        {icon === 'icon-profile' && <Profile />}
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
    borderRadius: 17,
    width: 159,
    height: 133,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 19,
    color: textColor,
  }),
});
