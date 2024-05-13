import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {
  Button2,
  Button3,
  Button4,
  Button6,
  Button7,
  Gap,
} from '../../components';
import {PageHeader2} from '../../components/molecules';

const StudentSurvey = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader2
        label="Survey"
        bbback={true}
        onPress={() => navigation.goBack()}
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
          label="Add"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('FillSurvey')}
        />
      </View>
    </View>
  );
};

export default StudentSurvey;

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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
    color: 'white',
  },
  text2: {
    fontSize: 20,
    alignSelf: 'left',
    color: 'white',
  },
});
