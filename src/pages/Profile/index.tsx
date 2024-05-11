import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Gap} from '../../components';
import {PageHeader} from '../../components/molecules';
import {Profilee} from '../../assets';

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader
          label="Profile"
          back={true}
          onPress={() => navigation.goBack()}
          type="default" // Add the 'type' prop with a default value
        />
        <View style={styles.header}>
          <Gap height={10} />
          <View style={styles.profileContainer}>
            <View style={styles.profile}>
              <View style={styles.addPhoto}>
                <TouchableOpacity>
                  <Image source={Profilee} style={styles.avatar} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Gap height={23} />
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
          <Text style={styles.balance1}>150</Text>
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
    backgroundColor: '#F5CC0D',
    height: 333,
    alignItems: 'center',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  headerText: {
    color: '#fff',
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
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  department: {
    fontSize: 22,
    color: 'black',
  },
  contentWrapper1: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: '',
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
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  profileContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    width: 180,
    borderRadius: 180 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  avatar: {
    height: 154,
    width: 154,
    borderRadius: 90 / 2,
  },
  addPhoto: {
    backgroundColor: '#fff',
    width: 110,
    height: 110,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
    color: '#F5CC0D',
  },
});

export default ProfileScreen;
