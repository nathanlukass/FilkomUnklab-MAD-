import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button4} from '../../../components/atoms';

const PageHeader = ({
  label,
  exit,
  onPressExit,
  back,
  backk,
  notif,
  onPressNotif,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {exit && (
        <Button4
          type="icon-only"
          icon="icon-exit"
          onPress={onPressExit}
          style={(styles.button, styles.notifButton)}
        />
      )}
      {back && (
        <Button4
          type="icon-only"
          icon="icon-back"
          onPress={onPress}
          style={styles.button}
        />
      )}
      {backk && (
        <Button4
          type="icon-only"
          icon="icon-back"
          onPress={onPress}
          style={styles.button}
        />
      )}
      {notif && (
        <Button4
          type="icon-only"
          icon="icon-notif"
          onPress={onPressNotif}
          style={(styles.button, styles.notifButton)}
        />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5CC0D',
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
    width: 11,
    height: 11,
  },
  notifButton: {
    marginLeft: 1000,
  },
});
