import {StyleSheet, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap} from '../../components/atoms';
import {backGround} from '../../assets/images';

const SignWith = ({navigation}) => {
  return (
    <ImageBackground source={backGround} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Gap height={380} />
        <Button
          label="L o g i n  Admin"
          onPress={() => navigation.navigate('Admin')}
        />
        <Gap height={6} />
        <Button
          label="L o g i n  Students"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ImageBackground>
  );
};

export default SignWith;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'auto',
  },
});
