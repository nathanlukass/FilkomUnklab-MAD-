import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Gap} from '../../components/atoms';
import {Button2} from '../../components/atoms';
import {PageHeader} from '../../components/molecules';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <PageHeader
        exit={true}
        notif={true}
        onPress={() => navigation.navigate('SignWith')}
        type="default" // Add the 'type' prop with a default value
      />
      <Gap height={14} />
      <View style={styles.row}>
        <Button2
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button2
          label="Take Attendance"
          onPress={() => navigation.navigate('SplashScreen')}
        />
      </View>
      <Gap height={13} />
      <View style={styles.row}>
        <Button2
          label="Seatting Map"
          onPress={() => navigation.navigate('Statistics')}
        />
        <Button2
          label="Statistics"
          onPress={() => navigation.navigate('Statistics')}
        />
      </View>
      <Gap height={13} />
      <View style={styles.row}>
        <Button2
          label="Forum Survey"
          onPress={() => navigation.navigate('SplashScreen')}
        />
        <Button2
          label="Points Claim"
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
