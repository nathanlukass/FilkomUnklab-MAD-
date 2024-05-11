import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import {Profilee} from '../../assets/images';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(Profilee);
  const [photoBase64, setPhotoBase64] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      setPhoto({uri: base64});
      setPhotoBase64(base64);
    }
  };

  const onSubmit = () => {
    const dataUser = {
      fullName: fullName,
      email: email,
      photo: photoBase64,
    };
    const auth = getAuth();
    const db = getDatabase();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // simpan ke dalam realtime database
        set(ref(db, 'users/' + user.uid), dataUser);
        showMessage({
          message: 'Registrasi berhasil, silahkan login',
          type: 'success',
        });
        navigation.navigate('LoginStudents');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Sign Up"
        back={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <View style={styles.addPhoto}>
              <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
                <Image source={Profilee} style={styles.avatar} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Gap height={26} />
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
          placeholderTextColor="#000000"
          value={fullName}
          onChangeText={value => setFullName(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          placeholderTextColor="#000000"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          placeholderTextColor="#000000"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={24} />
        <Button label="Continue" onPress={onSubmit} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  profileContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  addPhoto: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
});