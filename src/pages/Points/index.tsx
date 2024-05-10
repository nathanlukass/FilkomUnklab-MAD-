// Di dalam komponen Points
import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Gap} from '../../components/atoms';
import {Button5} from '../../components/atoms';
import {PageHeader} from '../../components/molecules';
import {Mouse, MousePad, Kyboard} from '../../assets/images';

const Points = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <PageHeader
        label="Points Claim"
        back={true}
        onPress={() => navigation.navigate('SignWith')}
        type="default"
      />
      <Gap height={15} />
      <View style={styles.row}>
        <Button5 label="Mouse" icon={Mouse} />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button5 label="MousePad" icon={MousePad} />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button5 label="Keyboard" icon={Kyboard} />
      </View>
    </ScrollView>
  );
};

export default Points;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});
