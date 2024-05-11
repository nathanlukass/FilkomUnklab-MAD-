import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Gap} from '../../components/atoms';
import {Button2} from '../../components/atoms';
import {PageHeader} from '../../components/molecules';

const Admin = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <PageHeader
        exit={true}
        onPress={() => navigation.navigate('SignWith')}
        type="default" // Add the 'type' prop with a default value
      />
      <Gap height={14} />
      <View style={styles.row}>
        <Button2
          label="Take Attendance"
          onPress={() => navigation.navigate('SplashScreen')}
        />
        <Button2
          label="Forum Survey"
          onPress={() => navigation.navigate('SplashScreen')}
        />
      </View>
      <Gap height={13} />
      <View>
        <Button2
          label="Points Claim"
          onPress={() => navigation.navigate('SplashScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default Admin;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 25,
  },
});
