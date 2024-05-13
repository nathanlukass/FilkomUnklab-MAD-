import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Buttonn, Gap} from '../../components/atoms';
import {PageHeader3} from '../../components/molecules';
import {TextInput2} from '../../components/molecules';
import {backGround} from '../../assets/images';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const LoginStudents = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <ImageBackground source={backGround} style={styles.backgroundImage}>
      <PageHeader3
        label="Student"
        back={false}
        onPress={() => navigation.navigate('SignWith')}
        type="default"
      />
      <View style={styles.contentWrapper}>
        <Gap height={15} />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'Poppins-Black',
            fontWeight: 'bold',
            color: '#333',
            marginTop: 0,
          }}>
          FILKOM UNKLAB
        </Text>
        <Gap height={25} />
        <TextInput2
          label="Email"
          placeholder="enter your email"
          placeholderTextColor="#000000"
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
        />

        <Gap height={10} />
        <TextInput2
          label="Password"
          placeholder="enter your password"
          placeholderTextColor="#000000"
          value={password}
          onChangeText={value => {
            setPassword(value);
            // secureTextEntry={true}
          }}
        />
        <Gap height={25} />
        <Buttonn
          label="Log In"
          backgroundColor="#F5CC0D"
          textColor="#F5CC0D"
          onPress={onSubmit}
        />
        <Gap height={12} />
        <Buttonn
          label="Back"
          backgroundColor="#F5CC0D"
          textColor="#F5CC0D"
          onPress={() => navigation.navigate('SignWith')}
        />
        <Gap height={12} />
        <Buttonn
          label="Sign Up"
          backgroundColor="#F5CC0D"
          textColor="#F5CC0D"
          onPress={() => navigation.navigate('SignUp')}
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
    marginTop: 155,
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
