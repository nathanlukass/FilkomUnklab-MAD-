import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Gap} from '../../components/atoms';
import {Button2} from '../../components/atoms';
import {PageHeader} from '../../components/molecules/PageHeader';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <Gap height={150} />
      <View style={styles.row}>
        <Button2
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button2
          label="Login"
          onPress={() => navigation.navigate('SplashScreen')}
        />
      </View>
      <Gap height={25} />
      <View style={styles.row}>
        <Button2
          label="Admin"
          onPress={() => navigation.navigate('SplashScreen')}
        />
        <Button2
          label="Button 4"
          onPress={() => navigation.navigate('SignWith')}
        />
      </View>
      <Gap height={25} />
      <View style={styles.row}>
        <Button2
          label="Points Claim"
          onPress={() => navigation.navigate('SplashScreen')}
        />
        <Button2
          label="Admin"
          onPress={() => navigation.navigate('SplashScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 25,
  },
});
