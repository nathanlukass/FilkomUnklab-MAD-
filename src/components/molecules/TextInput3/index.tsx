import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput3 = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#837979"
      />
    </View>
  );
};

export default TextInput3;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Italic',
    fontSize: 10,
    color: '#000000',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#837979',
    padding: 8,
  },
});
