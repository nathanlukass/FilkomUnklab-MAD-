import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button8, Gap} from '../../components/atoms/index';
import {PageHeader1, TextInput3} from '../../components/molecules/index';

const AdminAtt = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader1
        label="Attendance"
        back={true}
        onPress={() => navigation.navigate('Admin')}
        type="default"
      />
      <Gap height={15} />
      <View style={styles.contentWrapper}>
        <TextInput3 placeholder="dd/mm/yyyy" style={styles.textInput} />
        <TextInput3 placeholder="time" style={styles.textInput} />
        <TextInput3 placeholder="room/location" style={styles.textInput} />
        <Gap height={26} />
        <Button8
          label="Assign"
          onPress={() => navigation.navigate('AdminAtt')}
        />
      </View>
    </View>
  );
};

export default AdminAtt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 485,
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
