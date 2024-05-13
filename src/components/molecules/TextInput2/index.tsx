import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput2 = ({label, placeholder, placeholderTextColor}) => {
  return (
    <View>
      {/* <Text style={styles.label}>{label}</Text> */}
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor} // Menambahkan properti placeholderTextColor
      />
    </View>
  );
};

export default TextInput2;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 10,
    fontFamily: 'Poppins-Black',
    fontSize: 13,
    color: '#8D92A3',
    padding: 10,
  },
});
