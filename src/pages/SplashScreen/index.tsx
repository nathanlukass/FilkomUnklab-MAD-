import {StyleSheet, View, Image, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Filkom} from '../../assets/images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignWith'), 100000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Filkom} style={styles.logo} />
      <Text style={styles.text}>FAKULTAS ILMU KOMPUTER</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300, // ubah sesuai kebutuhan
    height: 300, // ubah sesuai kebutuhan
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
