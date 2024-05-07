import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button3, Gap} from '../../components/atoms';

const Statistics = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <Gap height={110} />
      <View style={styles.row}>
        <Button3
          label="Student Forum"
          additionalText="Thursday, January 11 2024"
          label2="P R E S E N T"
          status="Present"
          backgroundColor="black"
          textColor="white"
        />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button3
          label="Student Forum"
          additionalText="Thursday, January 18 2024"
          label2="P R E S E N T"
          status="Present"
          backgroundColor="black"
          textColor="white"
        />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button3
          label="Student Forum"
          additionalText="Thursday, January 25 2024"
          label2="L A T E"
          status="Late"
          backgroundColor="black"
          textColor="white"
        />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button3
          label="Student Forum"
          additionalText="Thursday, February 01 2024"
          label2="L A T E"
          status="Late"
          backgroundColor="black"
          textColor="white"
        />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button3
          label="Student Forum"
          additionalText="Thursday, February 15 2024"
          label2="P R E S E N T"
          status="Present"
          backgroundColor="black"
          textColor="white"
        />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button3
          label="Student Forum"
          additionalText="Thursday, February 22 2024"
          label2="P R E S E N T"
          status="Present"
          backgroundColor="black"
          textColor="white"
        />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button3
          label="Student Forum"
          additionalText="Thursday, February 29 2024"
          label2="A B S E N T"
          status="Absent"
          backgroundColor="black"
          textColor="white"
        />
      </View>
      <Gap height={15} />
      <View style={styles.row}>
        <Button3
          label="Student Forum"
          additionalText="Thursday, March 07 2024"
          label2="A B S E N T"
          status="Absent"
          backgroundColor="black"
          textColor="white"
        />
      </View>
    </ScrollView>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 25,
    alignItems: 'center',
  },
});
