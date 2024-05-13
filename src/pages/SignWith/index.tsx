import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import {backGround} from '../../assets/images';
import {PageHeader3} from '../../components';

const SignWith = ({navigation}) => {
  return (
    <ImageBackground source={backGround} style={styles.backgroundImage}>
      <PageHeader3
        label="Welcome!"
        back={false}
        onPress={() => navigation.navigate('SignWith')}
        type="default"
      />
      <Gap height={450} />
      <Button
        label="L o g i n  Admin"
        onPress={() => navigation.navigate('LoginAdmin')}
      />
      <Gap height={6} />
      <Button
        label="L o g i n  Students"
        onPress={() => navigation.navigate('LoginStudents')}
      />
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
