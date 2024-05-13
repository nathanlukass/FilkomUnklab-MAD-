import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {Gap} from '../../components/atoms';
import {PageHeader1} from '../../components/molecules';

const Notifications = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader1
        style={styles.header}
        label="Notifications"
        back={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={15} />
      <View style={styles.contentWrapper}>
        <Text style={styles.label}>
          Today's forum attendance has been sent!
        </Text>
      </View>
      <Gap height={5} />
      <View style={styles.container1}>
        <View style={styles.contentWrapper1}>
          <Text style={styles.label1}>
            Your Points claim request has been accepted!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  label: {
    color: 'black',
    paddingTop: 0,
    fontSize: 20,
    marginLeft: 13,
    marginRight: 70,
  },
  label1: {
    color: 'black',
    paddingTop: 0,
    fontSize: 20,
    marginLeft: 13,
    marginRight: 70,
  },
  container: {
    flex: 1,
    paddingBottom: 660,
  },
  container1: {
    flex: 1,
    paddingBottom: 0,
  },
  contentWrapper: {
    backgroundColor: '#F5CC0D',
    flex: 20,
    paddingHorizontal: 0,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  contentWrapper1: {
    backgroundColor: '#F5CC0D',
    flex: 1,
    paddingHorizontal: 1,
    paddingTop: 60,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});
