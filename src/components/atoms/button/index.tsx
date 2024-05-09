import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Exit, Notif, Profile, BackButton} from '../../../assets/icon';

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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#020202',
    paddingVertical: 12,
    borderRadius: 25,
    width: 210,
    height: 50,
    alignSelf: 'center',
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Black',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  }),
});
