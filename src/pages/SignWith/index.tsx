import {StyleSheet, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap} from '../../components/atoms';
import {backGround} from '../../assets/images';

const SignWith = ({navigation}) => {
  return (
    <ImageBackground source={backGround} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Gap height={500} />
        <Button
          label="Login Admin"
          onPress={() => navigation.navigate('loginAdmin')}
        />
        <Gap height={10} />
        <Button
          label="Login Student"
          onPress={() => navigation.navigate('loginStudents')}
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
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'auto',
  },
});
