import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';
import {Button, Gap,TextInput} from '../../components';
import { backGround } from '../../assets/images';


const loginAdmin = ({navigation}) => {
    return (
     <ImageBackground source={backGround} style={styles.backgroundImage}>              
        <View style={styles.contentWrapper}>
        <Gap height={100} />
            <TextInput
            label=""
            placeholder="  Email"
            />
            <Gap height={16} />
            <TextInput label="" 
            placeholder="  password" 
            />
            <Gap height={24} />
            <Button
            label="Log In"
            backgroundColor="#8D92A3"
            textColor="#FFFFFF"
            onPress={() => navigation.navigate('SignUp')}
            />
            <Gap height={12} />
            <Button
            label="Back"
            backgroundColor="#8D92A3"
            textColor="#FFFFFF"
            onPress={() => navigation.navigate('SignUp')}
            />
        
        </View>
     </ImageBackground>
    );
};

export default loginAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentWrapper: {
    marginTop: 250,
    marginLeft: 50,
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
