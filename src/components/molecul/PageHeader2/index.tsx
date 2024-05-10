import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button1} from '../../atoms';

const PageHeader2 = ({label, onPress, bback, bbback}) => {
  return (
    <View style={styles.container}>
      {bback && (
        <Button1
          type="icon-only"
          icon="icon-back"
          onPress={onPress}
          style={styles.button}
        />
      )}
        {bbback && (
            <Button1
              type="icon-only"
              icon="icon-back"
              onPress={onPress}
              style={styles.button}
            />
      )}
       <Text style={styles.label}>{label}</Text>
      </View>
    );
  };
export default PageHeader2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#796890',
    paddingLeft: 20,
    paddingVertical: 23,
    flexDirection: 'row',
    alignItems: 'center',
  },
label: {
  fontFamily: 'Poppins-Light',
  fontSize: 20,
  color: '#000000',
  marginLeft: 300,
  fontWeight: 'bold',
},
button: {
  width: 10,
  height: 10,
},
});
