import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import React from 'react';
import {Button, Gap,TextInput2} from '../../components';
import {PageHeader2} from '../../components/molecul';


const Survey = ({navigation}) => {
    return (    
        <View style={styles.container}>
        <PageHeader2
          label="Survey"
          bback={true}
          onPress={() => navigation.goBack()}
          type="default" 
        />       
        <View style={styles.contentWrapper}>

        <Gap height={5} />
          <TextInput2
            label=""
            placeholder="Fill in your suggest and critics "
          />
            
        
        </View>
        <Gap height={15} />
            <Button
            label="Submit"
            backgroundColor="#8D92A3"
            textColor="#FFFFFF"
            onPress={() => navigation.navigate('SignWith')}
            />
        </View>
    );
};

export default Survey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentWrapper: {
    marginTop: 15,
    marginLeft: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 425,
    height: 300,  
    backgroundColor: '#FFFFFF',
    

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'auto',
  },
});
