import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button4} from '../../../components/atoms';

const PageHeader = ({label, exit, onPress, back, backk}) => {
  return (
    <View style={styles.container}>
      {exit && (
        <Button4
          type="icon-only"
          icon="icon-exit"
          onPress={onPress}
          style={styles.button} // tambahkan ini
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
    fontWeight: '200',
    marginLeft: 130,
  },
  button: {
    width: 10,
    height: 10,
  },
});
