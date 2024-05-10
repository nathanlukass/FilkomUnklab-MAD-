import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {Button, Buttonn, Gap} from '../../components/atoms';
import {TextInput} from '../../components/molecules';
import {backGround} from '../../assets/images';

const LoginStudents = ({navigation}) => {
  return (
    <ImageBackground source={backGround} style={styles.backgroundImage}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          fontFamily: 'Poppins-Black',
          fontWeight: '',
          color: 'white',
          marginTop: 30,
        }}>
        Admin
      </Text>
      <View style={styles.contentWrapper}>
        <Gap height={30} />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'Poppins-Black',
            fontWeight: 'bold',
            color: '#333',
            marginTop: 5,
          }}>
          FILKOM UNKLAB
        </Text>
        <TextInput label1="" placeholder="  password" value="email" />
        <TextInput label1="" placeholder="  password" value="email" />
        <Gap height={20} />
        <Buttonn
          label="L o g   I n"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('Home')}
        />
        <Gap height={12} />
        <Buttonn
          label="B a c k"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignWith')}
        />
      </View>
    </ImageBackground>
  );
};

export default LoginStudents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 185,
    marginLeft: 30,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: 350,
    height: 400,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'auto',
  },
});
