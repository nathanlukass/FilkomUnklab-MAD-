import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button4} from '../../../components/atoms';

const PageHeader = ({label, exit, onPress, back, backk, notif}) => {
  return (
    <View style={styles.container}>
      {exit && (
        <Button4
          type="icon-only"
          icon="icon-exit"
          onPress={onPress}
          style={(styles.button, styles.notifButton)} // tambahkan ini
        />
      )}
      {back && (
        <Button4
          type="icon-only"
          icon="icon-back"
          onPress={onPress}
          style={styles.button} // tambahkan ini
        />
      )}
      {backk && (
        <Button4
          type="icon-only"
          icon="icon-back"
          onPress={onPress}
          style={styles.button} // tambahkan ini
        />
      )}
      {notif && (
        <Button4
          type="icon-only"
          icon="icon-notif"
          onPress={onPress}
          style={(styles.button, styles.notifButton)} // tambahkan ini
        />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#796890',
    paddingLeft: 22,
    paddingVertical: 23,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    color: '#000000',
    marginLeft: 135,
    fontWeight: 'bold',
  },
  button: {
    width: 10,
    height: 10,
  },
  notifButton: {
    marginLeft: 1000, // tambahkan margin ke kanan untuk notif
  },
});
