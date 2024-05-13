import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Gap, Button2, Button6} from '../../components';
import {PageHeader1} from '../../components/molecules';

const SeatMap = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader1
        label="Seating Map"
        back={true}
        onPress={() => navigation.goBack()}
        type="default" // Add the 'type' prop with a default value
      />
      <Gap height={20} />
      <Text style={styles.subtitle}>Map Seat This Semester </Text>
      <Gap height={20} />
      <Button6
        label=" Open PDF "
        backgroundColor="#F5CC0D"
        textColor="#FFFFFF"
        onPress={() => navigation.navigate('')}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/FILKOM.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center', // Memastikan gambar berada di tengah
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginTop: 70,
    alignItems: 'center',
  },
});
export default SeatMap;
