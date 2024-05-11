import {StyleSheet, View, Image, Text} from 'react-native';
import {React, useEffect} from 'react';
import {FILKOM} from '../../assets/images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignWith'), 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={FILKOM} style={styles.logo} />
      <Text style={styles.text}>FAKULTAS ILMU KOMPUTER</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350, // ubah sesuai kebutuhan
    height: 350, // ubah sesuai kebutuhan
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
