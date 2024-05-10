import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label1, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label1}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 10,
    fontFamily: 'Poppins-Black',
    fontSize: 20,
    color: '#837979',
    padding: 10,
  },
});
