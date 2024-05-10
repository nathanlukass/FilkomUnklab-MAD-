import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {LogoUk} from '../../assets/images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignWith'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={LogoUk} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#796890',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // ubah sesuai kebutuhan
    height: 200, // ubah sesuai kebutuhan
  },
});
