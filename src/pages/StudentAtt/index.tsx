import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {Button3, Button7, Gap} from '../../components';
import {PageHeader2} from '../../components/molecules';

const StudentAtt = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader2
        label="Attendance"
        bbback={true}
        onPress={() => navigation.navigate('Home')}
        type="default"
      />
      <View style={styles.contentWrapper}>
        <Gap height={20} />
        <Text style={styles.text}>Student Forum</Text>
        <Text style={styles.text2}> Thursday, April 04 2024</Text>
        <Text style={styles.text2}> 10.10 - 11.30</Text>
        <Text style={styles.text2}> at Pioneer Chapel</Text>

        <Gap height={10} />
        <Button7
          label="Scan"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SeatMap')}
        />
      </View>
    </View>
  );
};

export default StudentAtt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 15,
    marginLeft: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 386,
    height: 193,
    backgroundColor: '#F5CC0D',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'auto',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
    color: 'white',
  },
  text2: {
    fontSize: 20,
    alignSelf: 'right',
    color: 'white',
  },
});
