import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import {Gap, PageHeader1} from '../../components';
import {Profilee} from '../../assets/images/index';

const AdminSurvey = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader1
        style={styles.header}
        label="Survey"
        back={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={15} />
      <View style={styles.contentWrapper}>
        <View style={styles.row}>
          <Image source={Profilee} style={styles.profile} />
          <Text style={styles.name}>John, Doe</Text>
        </View>
        <Text style={styles.react}>
          today's activity is quite good, it just needs to be developed to be
          even better.
        </Text>
      </View>
    </View>
  );
};

export default AdminSurvey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 555,
  },
  row: {
    flexDirection: 'row',
  },
  profile: {
    width: 39,
    height: 39,
    marginTop: 15,
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 20,
  },
  react: {
    color: 'black',
    fontSize: 18,
    marginTop: 2,
    marginLeft: 55,
    marginRight: 50,
    fontStyle: 'italic',
  },
  contentWrapper: {
    backgroundColor: '#F5CC0D',
    flex: 1,
    paddingHorizontal: 17,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});
