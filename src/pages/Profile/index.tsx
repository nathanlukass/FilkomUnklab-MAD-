import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Gap} from '../../components';

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
          <Gap height={210} />
          <Text style={styles.name}>John, Doe</Text>
          <Text style={styles.department}>Informatics</Text>
        </View>
        <View style={styles.contentWrapper1}>
          <Text style={styles.balance}>NIM</Text>
          <Text style={styles.balance1}>105011228877</Text>
          <View style={styles.line} />
          <Text style={styles.balance}>Reg. Number</Text>
          <Text style={styles.balance1}>S22123456</Text>
          <View style={styles.line} />
          <Text style={styles.balance}>Email</Text>
          <Text style={styles.balance1}>s22123456@student.unklab.ac.id</Text>
          <View style={styles.line} />
          <Text style={styles.balance}>Forum Points</Text>
          <Text style={styles.balance1}>100</Text>
          <View style={styles.line} />
          <Text style={styles.balance}>Seat Number</Text>
          <Text style={styles.balance1}>B-10-5</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 1000,
  },
  header: {
    backgroundColor: '#796890',
    height: 333,
    alignItems: 'center',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  headerText: {
    color: '#000000',
    fontSize: 20,
  },
  profileInfo: {
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  department: {
    fontSize: 18,
    color: 'black',
  },
  contentWrapper1: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  balance: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingTop: 4, // reduced padding
    paddingBottom: 2, // reduced padding
  },
  balance1: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingTop: 4, // reduced padding
    paddingBottom: 2, // reduced padding
    fontWeight: 'bold',
  },
  balanceMoney: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
    marginBottom: 18,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  cashOn: {
    flexDirection: 'row',
  },
  cashOnStyle1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 20,
  },
  cashOnMoney1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 20,
    paddingLeft: 20,
  },
  cashOnStyle2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 11,
  },
  cashOnMoney2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 11,
    paddingLeft: 20,
  },
  contentWrapper2: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    paddingBottom: 72,
  },
  transactionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 10.6,
    marginBottom: 9,
  },
  contentWrapper3: {
    flex: 2,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeIcon: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
  },
  squareFrame: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
  },
});

export default ProfileScreen;
