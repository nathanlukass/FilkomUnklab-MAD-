import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import React from 'react';
import {Button, Gap, TextInput2} from '../../components';
import {PageHeader1} from '../../components/molecules';

const FillSurvey = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader1
        label="Fill Survey"
        back={true}
        onPress={() => navigation.goBack()}
        type="default"
      />
      <View style={styles.contentWrapper}>
        <Gap height={5} />
        <TextInput2 label="" placeholder="Fill in your suggest and critics " />
      </View>
      <Gap height={0} />
      <Button
        label="Submit"
        backgroundColor="#F5CC0D"
        textColor="#FFFFFF"
        onPress={() => navigation.navigate('StudentSurvey')}
      />
    </View>
  );
};

export default FillSurvey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 15,
    marginLeft: 0,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: 412,
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'auto',
  },
});
