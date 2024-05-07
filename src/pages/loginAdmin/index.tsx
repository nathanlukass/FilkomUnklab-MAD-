import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import React from 'react';
import {Button, Gap,TextInput} from '../../components';
import { backGround } from '../../assets/images';


const loginAdmin = ({navigation}) => {
    return (
     <ImageBackground source={backGround} style={styles.backgroundImage}>      
     <Text style={{ 
      fontSize: 25, 
      textAlign: 'center', 
      fontFamily: 'Poppins-Black', 
      fontWeight: '', 
      color: 'white', 
      marginTop: 30  }}>
        Admin
      </Text>             
        <View style={styles.contentWrapper}>
        <Gap height={30} />
        <Text style={{ 
          fontSize: 30, 
          textAlign: 'center', 
          fontFamily: 'Poppins-Black', 
          fontWeight: 'bold', 
          color: '#333', 
          marginTop: 5  }}>
            FILKOM UNKLAB
        </Text>
        <Gap height={5} />
          <TextInput
            label=""
            placeholder="  email"
          />
          <Gap height={0} />
          <TextInput label="" 
            placeholder="  password" 
          />
            <Gap height={35} />
          <Button
            label="Log In"
            backgroundColor="#8D92A3"
            textColor="#FFFFFF"
            onPress={() => navigation.navigate('SplashScreen')}
          />
            <Gap height={12} />
            <Button
            label="Back"
            backgroundColor="#8D92A3"
            textColor="#FFFFFF"
            onPress={() => navigation.navigate('SignWith')}
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
