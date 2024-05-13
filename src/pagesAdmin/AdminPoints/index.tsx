import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {Button8, Gap} from '../../components/atoms';
import {PageHeader1} from '../../components/molecules';

const AdminPoints = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader1
        style={styles.header}
        label="Points Claim"
        back={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={15} />
      <View style={styles.contentWrapper}>
        <Text style={styles.label}>
          <Text style={styles.boldName}>John, Doe</Text> has submitted a 100
          Point reward claim request
        </Text>
        <Gap height={25} />
        <Button8
          label="Accept"
          onPress={() => navigation.navigate('Notifications')}
        />
      </View>
    </View>
  );
};

export default AdminPoints;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 561,
  },
  label: {
    color: 'black',
    fontSize: 20,
    marginTop: 15,
    marginRight: 83,
  },
  boldName: {
    fontWeight: 'bold',
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
