import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
const PageHeader4 = ({label, backButton, onPress, type}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
export default PageHeader4;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5CC0D',
    paddingLeft: 22,
    paddingVertical: 23,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerWithPhoto: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-Light',
    fontSize: 22,
    color: '#000000',
    fontWeight: '200',
    textAlign: 'right',
    flex: 1,
    paddingRight: 30,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  face: {
    width: 55,
    height: 55,
    borderRadius: 8,
  },
});
